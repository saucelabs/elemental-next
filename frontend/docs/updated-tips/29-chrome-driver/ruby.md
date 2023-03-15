---
title: How To Run Your Tests Locally Against Chrome
id: 29-chrome-driver-ruby
slug: ruby/
number: 29
publish_date: 2015-08-25
last_update:
  date: 2023-03-15
tags:
  - drivers
  - chromedriver
  - chrome
  - different browsers
level: 2
category: setup
language: ruby
---

# How To Run Your Tests Locally Against Chrome

## Intro

It's straightforward to get your tests running locally against Firefox. But when you want to run them against a different browser like Chrome, you quickly run into configuration overhead that can seem overly complex and lacking in code examples for getting started.

## A Solution

With the introduction of WebDriver (circa Selenium 2) a lot of benefits were realized (e.g. more effective & faster browser execution, no more single host origin issues, etc). But with it came some architectural & configuration differences that may not be widely known. Namely -- browser drivers.

WebDriver works with each of the major browsers through a browser driver which is (ideally) maintained by the browser manufacturer. It is an executable file (consider it a thin layer or a shim) that acts as a bridge between Selenium and the browser.

Let's step through an example using [ChromeDriver](https://sites.google.com/chromium.org/driver/).

## Example 1

Before starting, we'll need to download the latest ChromeDriver binary executable from [here](http://chromedriver.storage.googleapis.com/index.html). Once we have it we'll need to tell Selenium where it is. And there are three ways to do this:

+ Add it to the System PATH
+ Specify it in the Selenium setup
+ Launch ChromeDriver and connect to it via Selenium Remote

Let's step through the latter two options.

We'll start by pulling in our requisite libraries (e.g., `selenium-webdriver` to driver the browser and `rspec/expectations` & `RSpec::Matchers` to perform an assertion) and wiring up some simple `setup`, `teardown`, and `run` methods.

```ruby
# filename: chrome.rb

require 'selenium-webdriver'
require 'rspec/expectations'
include RSpec::Matchers

def setup
  Selenium::WebDriver::Chrome::Service.driver_path = "C:\\tmp\\chromedriver.exe"
  @driver = Selenium::WebDriver.for :chrome
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

Notice that in `setup` we are telling Selenium where the ChromeDriver exectuable is with `driver_path` before creating an instance of the browser.

Now we're ready to add a simple test.

```ruby
# filename: chrome.rb
# ...

run do
  @driver.get 'http://the-internet.herokuapp.com/'
  expect(@driver.title).to eql 'The Internet'
end
```

If we save this file and run it (e.g., `ruby chrome.rb`) it will launch an instance of Chrome, visit the homepage of [the-internet](http://the-internet.herokuapp.com/), and assert that the page title loaded.

## Example 2

Alternatively, we can launch ChromeDriver from the command-line using either commands `chromedriver` or `chromedriver.exe`...


```sh
> chromedriver.exe
Starting ChromeDriver 2.18.343837 (52eb4041461e46a6b73308ebb19e85787ced4281) on port 9515
Only local connections are allowed.
```

...and connect to it with Selenium Remote.

==**`!! Code snippet needs validation !!`**==

```ruby
# filename: chrome.rb
# ...

def setup
  @driver = Selenium::WebDriver.for :remote, url: 'http://localhost:9515', desired_capabilities: :chrome
end


# ...
```

__NOTE: This approach will perform faster since ChromeDriver is already running and your test just needs to connect to it. Whereas the prior approach needs to start and stop ChromeDriver for _each_ test. The trade-off here is that ChromeDriver will keep running after your tests complete. So you'll either need to ensure it's always up, or come up with a way to shut it down after your tests finish.__

## Expected Behavior

When we save this file and run it (e.g., `ruby chrome.rb` from the command-line) here is what will happen.

<u>Example 1</u>

+ ChromeDriver starts
+ Chrome opens
+ Test runs
+ Chrome closes
+ ChromeDriver stops

<u>Example 2</u>

+ ChromeDriver starts (via command-line execution)
+ Chrome opens
+ Test runs
+ Chrome closes
+ ChromeDriver continues to run until stopped

## Summary

Hopefully this tip has helped you get a better handle on how WebDriver works with various browsers and saved you some time in your configuration setup. But keep in mind that no two browser drivers are alike, so be sure to check out the documentation for the browser you care about to find out it's specific requirements. For more about specific driver requirements, visit the official [Selenium Quick Reference page for Installing Browser Drivers](https://www.selenium.dev/documentation/webdriver/getting_started/install_drivers/#quick-reference).

Happy Testing!

## About The Author

Dave Haeffner is the original writer of Elemental Selenium -- a free, once weekly Selenium tip newsletter that's read by thousands of testing professionals. He also created and maintains the-internet (an open-source web app that's perfect for writing automated tests against).

Dave has helped numerous companies successfully implement automated acceptance testing; including The Motley Fool, ManTech International, Sittercity, and Animoto. He is also an active member of the Selenium project and has spoken at numerous conferences and meetups around the world about automated acceptance testing.
