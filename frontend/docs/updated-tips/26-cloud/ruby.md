---
title: 'How To Run Your Tests On Any Browser & Operating System'
slug: '26-cloud'
number: 0
publish_date: 2015-09-15
last_update: 
  date: 2023-02-27
tags:
  - 'sauce labs'
  - 'test infrastructure'
  - 'to the cloud'
  - 'cloud'
  - 'someone elses grid'
level: 1
category: 'infrastructure'
language: ruby
---

# How To Run Your Tests On Any Browser & Operating System

==**`!! Codes on this page are deprecated !!`**==

## Intro

What happens when you need to test features on an older browser? What if you need to test multiple older browsers? Let's explore this use case.

## Use Case

In order to test features in an old browser, like Internet Explorer 8, you would have to run a virtual machine (VM) on your computer with a "legit" version of Windows XP installed on the VM.

Now what happens if you need to check things on multiple versions of Internet Explorer? Then you're looking at multiple VMs.

Now what about when you need to scale and cover other browser and Operating System (OS) combinations? Then you're looking at provisioning, running, and maintaining your own farm of machines and standing up something like [Selenium Grid](https://www.selenium.dev/documentation/grid/) to coordinate tests across them.

And all you wanted to do was run your tests on the browsers you cared about... but there's a better solution to all of this.

## A Solution

Rather than take on the overhead of a test infrastructure, you can easily outsource things to a third-party cloud provider (a.k.a. Someone Elses Grid). There are a handful of players in this space, but there's one that stands out -- Sauce Labs.

At the heart of Selenium at scale is the use of Selenium Grid and Selenium Remote. Selenium Grid lets you distribute test execution across several machines and you connect to it with Selenium Remote. With Selenium Remote you specify the browser type, browser version, and operating system through the use of Selenium Remote's `Capabilities`.

This is fundamentally how Sauce Labs works. Behind the curtain they are ultimately running Selenium Grid, and they receive and execute your tests through Selenium Remote.

Here is an example.

## Example(s)


**NOTE: You'll need an account to use Sauce Labs. You can sign up for a free trial account (no credit-card required) [here](https://saucelabs.com/sign-up).

First we'll include our dependent libraries (e.g., `selenium-webdriver` to drive the browser and `rspec/expectations` & `RSpec::Matchers` for our assertion), and wire up some simple `setup`, `teardown`, and `run` methods.


==**`!! Deprecated code needs replacing !!`**==
```ruby
# filename: cloud.rb

require 'selenium-webdriver'
require 'rspec/expectations'
include RSpec::Matchers

def setup
  caps = Selenium::WebDriver::Remote::Capabilities.internet_explorer
  caps.version = '8'
  caps.platform = 'Windows XP'
  caps[:name] = 'Hello World!'

  @driver = Selenium::WebDriver.for(
    :remote,
    url: "http://#{ENV['SAUCE_USERNAME']}:#{ENV['SAUCE_ACCESS_KEY']}@ondemand.saucelabs.com:80/wd/hub",
    desired_capabilities: caps)
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
==**`!! Instructions are deprecated !!`**==
Our `setup` method is where the magic is happening. We create an instance of Selenium Remote's Capabilities for Internet Explorer (e.g., `Selenium::WebDriver::Remote::Capabilities.internet_explorer`) and store it in a variable for immediate reuse. We then set the browser version (e.g. `caps.version = '8'`), specify the operating system we would like to use (e.g. `caps.platform = 'Windows XP'`), and set the test name (e.g., `caps[:name] = 'Hello World!'`).

We then connect to Sauce Labs with Selenium Remote and feed in our capabilities (`caps`) object.

**NOTE: The URL contains the URI for Sauce Labs' on-demand service as well as our Sauce user and access credentials. In this case, they are specified through environment variables. But you can just as easily hard-code your info here.**

Now we're ready to add a test to run in Sauce Labs.

==**`!! Deprecated code needs replacing !!`**==
```ruby
run do
  @driver.get 'http://the-internet.herokuapp.com'
  expect(@driver.title.include?('The Internet')).to eql true
end
```

If we save this and run it (e.g., `ruby cloud.rb` from the command-line) it will execute the test on an Internet Explorer 8 browser instance running on Windows XP in Sauce Labs.

## Another Browser

If you want to change up the browser, you would just need to alter the Capabilities:

==**`!! Deprecated code needs replacing !!`**==

```ruby
  # For Internet Explorer 9
  caps = Selenium::WebDriver::Remote::Capabilities.internet_explorer
  caps.version = '9'
```

Or...

==**`!! Deprecated code needs replacing !!`**==

```ruby
  # For Chrome 28
  caps = Selenium::WebDriver::Remote::Capabilities.chrome
  caps.version = '28'
```

Or...

==**`!! Deprecated code needs replacing !!`**==

```ruby
  # For Chrome 28
  caps = Selenium::WebDriver::Remote::Capabilities.firefox
  caps.version = '40'
```

**NOTE: You can find a full list of configuration options along with example code for all of Sauce's supported languages [here](https://docs.saucelabs.com/reference/platforms-configurator/#/).**

## Expected Behavior

- Open a specified browser in Sauce Labs
- Test runs
- Browser closes
- Test results (along with a video recording, screenshots, and other debugging information) are available on the [test results dashboard](https://docs.saucelabs.com/test-results/viewing-test-results/).

## Summary

Hopefully this tip has helped you get your tests up and running against numerous browsers.

There are some other things to consider when using Sauce Labs (e.g., testing your secure apps through [Sauce Connect](https://docs.saucelabs.com/reference/sauce-connect/)==**`!! Broken link needs to be replaced !!`**==, setting the pass/fail status for your tests, and dynamically setting the test name). You can find more information about these things in [the Sauce Labs docs](https://docs.saucelabs.com/).

Happy Testing!

## About The Author

Dave Haeffner is the original writer of Elemental Selenium -- a free, once weekly Selenium tip newsletter that's read by thousands of testing professionals. He also created and maintains the-internet (an open-source web app that's perfect for writing automated tests against).

Dave has helped numerous companies successfully implement automated acceptance testing; including The Motley Fool, ManTech International, Sittercity, and Animoto. He is also an active member of the Selenium project and has spoken at numerous conferences and meetups around the world about automated acceptance testing.
