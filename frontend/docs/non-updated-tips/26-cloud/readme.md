---
title: 'How To Run Your Tests On Any Browser & Operating System'
slug: '26-cloud'
number: 26
publish_date: 2015-09-15
tags:
  - 'sauce labs'
  - 'test infrastructure'
  - 'to the cloud'
  - 'cloud'
  - 'someone elses grid'
level: 1
category: 'infrastructure'
---

## The Problem

If you've ever needed to test features in an older browser (like Internet Explorer 8) then odds are you ran a virtual machine (VM) on your computer with a "legit" version of Windows XP. Handy, but what happens when you need to check things on multiple versions of IE? Now you're looking at multiple VMs. And what about when you need to scale and cover other browser and Operating System (OS) combinations?

Now you're looking at provisioning, running, and maintaining your own farm of machines and standing up something like [Selenium Grid](http://elementalselenium.com/tips/52-grid) to coordinate tests across them.

And all you wanted to do was run your tests on the browsers you cared about...

## A Solution

Rather than take on the overhead of a test infrastructure you can easily outsource things to a third-party cloud provider (a.k.a. someone elses Grid). There are a handful of players in this space, but there's one that stands out -- Sauce Labs.

## A brief primer on Selenium Remote, Selenium Grid, and Sauce Labs

At the heart of Selenium at scale is the use of Selenium Grid and Selenium Remote. Selenium Grid lets you distribute test execution across several machines and you connect to it with Selenium Remote. With Selenium Remote you specify the browser type, browser version, and operating system through the use of Selenium Remote's `Capabilities`.

This is fundamentally how Sauce Labs works. Behind the curtain they are ultimately running Selenium Grid, and they receive and execute your tests through Selenium Remote.

Let's dig in with an example.

## An Example

**NOTE: You'll need an account to use Sauce Labs. You can sign up for a free trial account (no credit-card required) [here](https://saucelabs.com/signup/trial). And if you're signing up because you want to test an open source project, then give [their Open Sauce account](https://saucelabs.com/opensauce) a look.**

First we'll include our dependent libraries (e.g., `selenium-webdriver` to drive the browser and `rspec/expectations` & `RSpec::Matchers` for our assertion), and wire up some simple `setup`, `teardown`, and `run` methods.

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

Our `setup` method is where the magic is happening. We create an instance of Selenium Remote's Capabilities for Internet Explorer (e.g., `Selenium::WebDriver::Remote::Capabilities.internet_explorer`) and store it in a variable for immediate reuse. We then set the browser version (e.g. `caps.version = '8'`), specify the operating system we would like to use (e.g. `caps.platform = 'Windows XP'`), and set the test name (e.g., `caps[:name] = 'Hello World!'`).

We then connect to Sauce Labs with Selenium Remote and feed in our capabilities (`caps`) object.

**NOTE: The URL contains the URI for Sauce Labs' on-demand service as well as our Sauce user and access credentials. In this case, they are specified through environment variables. But you can just as easily hard-code your info here.**

Now we're ready to add a test to run in Sauce Labs.

```ruby
run do
  @driver.get 'http://the-internet.herokuapp.com'
  expect(@driver.title.include?('The Internet')).to eql true
end
```

If we save this and run it (e.g., `ruby cloud.rb` from the command-line) it will execute the test on an Internet Explorer 8 browser instance running on Windows XP in Sauce Labs.

## Another Browser

If you want to change up the browser, you would just need to alter the Capabilities:

```ruby
  # For Internet Explorer 9
  caps = Selenium::WebDriver::Remote::Capabilities.internet_explorer
  caps.version = '9'
```

Or...

```ruby
  # For Chrome 28
  caps = Selenium::WebDriver::Remote::Capabilities.chrome
  caps.version = '28'
```

Or...

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
- [Test results (along with a video recording, screenshots, and other debugging information) are available on the job dashboard](https://saucelabs.com/beta/tests/c9ab7289e33b4dae95058679aeebff29/commands)

![Sauce Labs Job Report](./../images/sauce-job.png)

## Outro

Hopefully this tip has helped you get your tests up and running against numerous browsers.

There are some other things to consider when using Sauce Labs (e.g., testing your secure apps through [Sauce Connect](https://docs.saucelabs.com/reference/sauce-connect/), setting the pass/fail status for your tests, and dynamically setting the test name). You can find information about these things in [the Sauce Labs docs](https://docs.saucelabs.com/). These topics are also covered in-depth in [The Selenium Guidebook](https://seleniumguidebook.com/).

Happy Testing!
