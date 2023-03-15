---
title: How To Test Your Mobile App
id: 30-mobile-ruby.md
slug: ruby/
number: 30
publish_date: 2013-12-17
last_update:
  date: 2023-03-15
tags:
  - mobile testing
  - mobile
  - appium
  - sauce labs
level: 2
category: mobile
language: ruby
---

# How To Test Your Mobile App

>==**`!! Information on this page is outdated !!`**==
>
>==**`!! Broken link on this page need replacing !!`**==

## Intro

__NOTE: This post is outdated. I've written a more current series of getting started posts for mobile testing with Appium. You can find them [here](https://saucelabs.com/resources/articles/appium-bootcamp-chapter-1).__

## Use Case

Mobile is kind of a big deal. And if you haven't needed to test a mobile app yet, it's only a matter of time. But where do you start? And how do you do it in a way that is complimentary to your exisitng automation and experience?

## A Solution

Give [Appium](http://appium.io/) a try. It's open source, works for both iPhone & Android, and works through the use of the Selenium WebDriver API (without having to recompile the app in order to test it).

That is to say -- you can write tests pretty much the same way as you do now, there are just some aditional things to think about -- like new functionality (e.g. pinch, swipe, etc.) and setup (e.g. serving your app, running simulators and a server locally, or sending things off to the cloud).

To simplify things, let's step through 2 examples using Sauce Labs to test native apps -- one for iPhone and another for Android. If you need a primer on what Sauce Labs is and how to use it, check out [this tip](http://elementalselenium.com/tips/26-cloud)==**`!! Internal link needs replacing !!`**==.

__NOTE: These examples were borrowed from [the Appium project](https://github.com/appium/appium/tree/master/sample-code/examples/ruby)==**`!! Broken link needs replacing !!`**== and modified for simplicity.__

## A brief primer on Native App Testing In SauceLabs

In order to test your app in SauceLabs you will need to zip it up and serve it somehow. Here are some options on how to do that:
+ make it publically available (e.g. from AWS)
+ use [Sauce Labs' temporary storage](http://saucelabs.com/docs/rest#storage)==**`!! Broken link needs replacing !!`**==
+ use [Sauce Connect](https://saucelabs.com/docs/connect)==**`!! Broken link needs replacing !!`**== and grab it from a machine behind your firewall

Once you have that you just need to set your test's desired capabilities accordingly. You can see a list of options [here](https://saucelabs.com/docs/platforms/appium)==**`!! Broken link needs replacing !!`**==.

## An iPhone Example

In this example we will be testing an application that has a form that takes 2 numbers, adds them together, and displays the result.

__NOTE: Contrary to the Appium philosophy of not needing to recompile your app, there is one SMALL tweak you'll need to make before your app is ready for Sauce (if you care about testing against an iPhone). It's to make sure that the correct simulator gets loaded. Instructions available [here](https://saucelabs.com/appium/tutorial/2#compiling)==**`!! Broken link needs replacing !!`**==.__

We kick off our iPhone example by requiring our dependent libraries (`selenium-webdriver` to drive the browser, and `rspec-expectations` for handling assertions). After that, we wire up our setup, teardown, and run methods.

==**`!! Code snippet needs validation !!`**==

```ruby
require 'selenium-webdriver'
require 'rspec-expectations'

def setup
  caps = {
    'platform'            => 'Mac 10.8',
    'version'             => '6.1',
    'device'              => 'iPhone Simulator',
    'app'                 => 'http://appium.s3.amazonaws.com/TestApp6.0.app.zip',
    'name'                => 'Ruby/iPhone Example for Appium'
  }

  @driver = Selenium::WebDriver.for(
    :remote,
    :url => "http://SAUCE_USERNAME:SAUCE_API_KEY@ondemand.saucelabs.com:80/wd/hub",
    :desired_capabilities => caps)
end

def teardown
  @driver.quit
end

def run
  setup
  yield
  teardown
end
```

Note that in `setup` we configure our capabilities by setting them to a hash and storing them in a variable called `caps`. In it we are specifying the platform we would like (`Mac 10.8`), the iOS version (`6.1`), the device (`iPhone Simulator`), and the app we would like to load (zipped up and served from AWS).

We then instantiate Selenium Remote in a `@driver` object; pointing it at Sauce Labs, and passing in our desired capabilities.

And in our test we wire up interaction with the app using familiar Selenium WebDriver API actions and an assertion.

==**`!! Code snippet needs validation !!`**==

```ruby
run do
    values = [rand(10), rand(10)]
    expected_sum = values.reduce(&:+)

    elements = @driver.find_elements(:tag_name, 'textField')
    elements.each_with_index do |element, index|
      element.send_keys values[index]
    end

    @driver.find_element(:tag_name, 'button').click
    @driver.find_element(:tag_name, 'staticText').text.should == expected_sum.to_s
end
```

## Expected Behavior

+ Open a job with Sauce Labs
+ Load an iPhone simulator on a Mac
+ Load the test app
+ Input two random numbers
+ Sum them them together
+ Assert that they are correctly added together

__NOTE: You can see the test result complete with video [here](https://saucelabs.com/tests/6736add27ae544409e7ae918ff74ae8d)==**`!! Broken link needs replacing !!`**==.__

## An Android Example

In this example we will be testing a simple note taking app.

We kick off our Android example by requiring our dependent libraries (`selenium-webdriver` to drive the browser, and `rspec-expectations` for handling assertions). After that, we wire up our setup, teardown, and run methods.

==**`!! Code snippet needs validation !!`**==

```ruby
require 'selenium-webdriver'
require 'rspec-expectations'

def setup
  caps = {
    'platform'            => 'Linux',
    'version'             => '4.2',
    'device'              => 'Android',
    'app'                 => 'http://appium.s3.amazonaws.com/NotesList.apk',
    'app-package'         => 'com.example.android.notepad',
    'app-activity'        => '.NotesList',
    'name'                => 'Ruby/Android Example for Appium'
  }

  @driver = Selenium::WebDriver.for(
    :remote,
    :url => "http://SAUCE_USERNAME:SAUCE_API_KEY@ondemand.saucelabs.com:80/wd/hub",
    :desired_capabilities => caps)
end

def teardown
  @driver.quit
end

def run
  setup
  yield
  teardown
end
```

In `setup`, we configure our capabilities by setting them to a hash and storing them in a variable called `caps`. In it we are specifying the platform (`Linux`), the Android version (`4.2`), the device (`Android`), and where to find the app (zipped and served from AWS). We then instantiate Selenium Remote in a `@driver` object; pointing it at Sauce Labs, and passing in our desired capabilities.

The additional bits of info we need to provide in `caps` (versus in our iPhone example) are `app-package` and `app-activity`. `app-package` being the package name of your app, and `app-activity` being the name of the activity you would like to start. `app-activity` gets appended to `app-package` and is used at Sauce run time to launch your app (e.g. `com.example.android.notepad.NotesList`).

And in our test we wire up interaction with the app using familiar Selenium WebDriver API actions and an assertion.

==**`!! Code snippet needs validation !!`**==

```ruby
run do
  @driver.find_element(:name, 'New note').click
  @driver.find_element(:tag_name, 'textfield').send_keys 'This is a new note, from Ruby'
  @driver.find_element(:name, 'Save').click

  notes = @driver.find_elements(:tag_name, 'text')
  notes[2].text.should == 'This is a new note, from Ruby'
end
```

## Expected Behavior

+ Open a job with Sauce Labs
+ Load an Android simulator on a Linux machine
+ Load the test app
+ Create a new note
+ Fill in the new note
+ Grab the note text and assert that it's what we inputted

__NOTE: You can see the test result complete with video [here](https://saucelabs.com/tests/e0dbb98af23540d8b43f0806d743fbd8)==**`!! Broken link needs replacing !!`**==.__

## Other Helpful Tidbits

### Inspecting Elements

In order to easily inspect and identify the elements in your app, you can use Appium's Inspector which comes in [appium-dot-app](https://github.com/appium/appium-dot-app) and requires you to set up Appium locally.

__NOTE: You can see a demo of it in action with an iOS app [here](http://www.youtube.com/watch?v=Hv9A9WfYF4g).__

### Mobile Web Apps

If instead you have a mobile web app, you can launch mobile Safari by switching out the URL in `app` with `safari`, like so:

==**`!! Code snippet needs validation !!`**==

```ruby
  caps = {
    'platform'            => 'Mac 10.8',
    'version'             => '6.1',
    'device'              => 'iPhone Simulator',
    'app'                 => 'safari',
    'name'                => 'Ruby/iPhone Example for Appium',
  }
```

But it's worth noting that Sauce Labs does not currently support the ability launch a mobile browser on Android (e.g. `chrome`). This functionality is, however, available when running Appium locally (as documented [here](https://github.com/appium/appium/blob/master/docs/mobile-web.md#mobile-chrome-on-emulator-or-real-device))==**`!! Broken link needs replacing !!`**==.

### Hybrid Apps

If you have a hybrid mobile app (e.g. an app with a native container that leverages the built in browser engine), then you should be good to go both locally and in Sauce. For details, go [here](https://github.com/appium/appium/blob/master/docs/hybrid.md)==**`!! Broken link needs replacing !!`**==.

### Location Services

If you have an iOS app that deals with geolocation, then working with the Location Services dialog can be a little tricky.

You can either do a blanket dismiss (which requires some elbow grease -- see [this Appium Google Groups thread](https://groups.google.com/d/msg/appium-discuss/k5gbfVFRPsE/cCkje7tczQcJ) for details), or capture and dismiss the dialog as it appears (using functionality found in a library like [ruby_lib](https://github.com/appium/ruby_lib/blob/master/docs/ios_docs.md#alert_click-ios)).

And in Sauce Labs, Location Services is disabled by default on iOS 6.1, but enabled by default on iOS 7.1. This is not configurable, but may be in the future through desired capabilities (there's [an active thread about this on Sauce's support site](http://support.saucelabs.com/entries/25117411-Location-services-enabled-by-default-on-iOS-devices)==**`!! Broken link needs replacing !!`**==, feel free to chime in!).

__NOTE: Sauce Labs now supports Location Services (as noted in [this recent support thread comment](http://support.saucelabs.com/entries/25117411#view-post-21941225))==**`!! Broken link needs replacing !!`**==. You can set it in your desired capabilities with `locationServicesEnabled` and a `true` or `false` value.__

## Summary

Hopefully this tip has helped give you enough to get started with mobile testing. In order to take full advantage of what Appium has to offer, getting it set up locally is key. I encourage you to check out the installation docs (available for [OS X](https://github.com/appium/appium/blob/master/docs/running-on-osx.md)==**`!! Broken link needs replacing !!`**==, [Linux](https://github.com/appium/appium/blob/master/docs/running-on-linux.md)==**`!! Broken link needs replacing !!`**==, and [Windows](https://github.com/appium/appium/blob/master/docs/running-on-windows.md))==**`!! Broken link needs replacing !!`**==.

And if you're curious about other mobile automation frameworks, Alister Scott has [a good breakdown of them](http://watirmelon.com/2013/11/04/the-current-state-of-ios-automated-functional-testing/)==**`!! Broken link needs replacing !!`**==.

Happy Testing!

Dave Haeffner is the original writer of Elemental Selenium -- a free, once weekly Selenium tip newsletter that's read by thousands of testing professionals. He also created and maintains the-internet (an open-source web app that's perfect for writing automated tests against).

Dave has helped numerous companies successfully implement automated acceptance testing; including The Motley Fool, ManTech International, Sittercity, and Animoto. He is also an active member of the Selenium project and has spoken at numerous conferences and meetups around the world about automated acceptance testing.
