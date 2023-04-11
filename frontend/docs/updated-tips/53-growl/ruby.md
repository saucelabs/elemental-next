---
title: Ruby
id: 53-growl-ruby
slug: ruby/
number: 53
publish_date: 2016-11-22
last_update:
  date: 2023-03-25
tags:
  - jquery
  - growl
  - growl notifications
  - jquery-growl
level: 2
category:
  - troubleshooting
language: ruby
---

# How to Add Growl Notifications to Your Tests

## Intro

Good test reports are a fundamental component of successful test automation, but running down a test failure by looking at a test report can be a real pain sometimes. Oftentimes, you're left to decipher debug statements, or go through things piece by piece -- all for the sake of trying to track down a transient issue.

## A Solution

By leveraging something like [jQuery Growl](http://ksylvest.github.io/jquery-growl/) you can output non-interactive debugging statements directly to the page you're testing.

With Growl way you can see helpful information and more-likely correlate it to the test actions that are being taken. This can a boon for your test runs when coupled with screenshots and/or video recordings of your test runs

Let's step through an example of how to set this up.

## Example

First, we'll include our requisite libraries and wire up some simple `setup`, `teardown`, and `run` methods.

```ruby
# filename: growl.rb

require 'selenium-webdriver'
require 'rspec/expectations'
include RSpec::Matchers

def setup
  @driver = Selenium::WebDriver.for :firefox
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

Now for our test. We'll need to visit the page we want to display notifications on and do some work with JavaScript to load [jQuery](http://jquery.com/), jQuery Growl, and styles for jQuery Growl. After that we can issue commands to jQuery Growl to make notification messages display on the page.

```ruby
run do
  @driver.get 'http://the-internet.herokuapp.com'

  # Step 1: check for jQuery on the page, add it if needbe
  @driver.execute_script(
    "if (!window.jQuery) {
    var jquery = document.createElement('script');
    jquery.type = 'text/javascript';
    jquery.src = 'https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js';
    document.getElementsByTagName('head')[0].appendChild(jquery);
    }")

  # Step 2: use jQuery to add jquery-growl to the page
  @driver.execute_script("$.getScript('http://the-internet.herokuapp.com/js/vendor/jquery.growl.js')")

  # Step 3: use jQuery to add jquery-growl styles to the page
  @driver.execute_script("$('head').append('<link rel=\"stylesheet\" href=\"http://the-internet.herokuapp.com/css/jquery.growl.css\" type=\"text/css\" />');")

  sleep 5 # adding 5 seconds sleep

  # Step 4: display a message with jquery-growl
  @driver.execute_script("$.growl({ title: 'GET', message: '/' });")

  sleep 5 # to keep the browser active long enough to see the notifications
end
```

And if we wanted to see color-coded notifications, then we could use one of the following:

```ruby
  @driver.execute_script("$.growl.error({ title: 'ERROR', message: 'your error message goes here' });")
  @driver.execute_script("$.growl.notice({ title: 'Notice', message: 'your notice message goes here' });")
  @driver.execute_script("$.growl.warning({ title: 'Warning!', message: 'your warning message goes here' });")
```

## Expected Behavior

+ Browser opens
+ Load the page
+ Add jQuery, jQuery Growl, and jQuery Growl notifications to the page
+ Display a set of notification messages in the top-right corner of the page
+ Notification messages disappear
+ Browser closes

## Summary

In order to use this approach, you will need to load jQuery Growl on every page you want to display output to -- which can be a bit of overhead. But if you want rich messaging like this then that's the price you have to pay (unless you can get your team to add it to the application under test).

In a future tip I'll step through how to access Selenium logging output so we can wire it up to these notifications.

I'd like to give a big thanks to Jon Austen ([Twitter](https://twitter.com/austenjt), [GitHub](https://github.com/djangofan)) for giving me the idea to use jQuery Growl with Selenium.

Happy Testing!

## About The Author

Dave Haeffner is the original writer of Elemental Selenium -- a free, once weekly Selenium tip newsletter that's read by thousands of testing professionals. He also created and maintains the-internet (an open-source web app that's perfect for writing automated tests against).

Dave has helped numerous companies successfully implement automated acceptance testing; including The Motley Fool, ManTech International, Sittercity, and Animoto. He is also an active member of the Selenium project and has spoken at numerous conferences and meetups around the world about automated acceptance testing.
