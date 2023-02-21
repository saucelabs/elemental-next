---
title: "How To Run A Test On Multiple Browsers"
slug: "41-one-test-multiple-browsers"
number: 41
publish_date: 2014-03-11
tags:
  - "multiple browsers"
  - "cloud"
  - "sauce labs"
level: 2
category: "infrastructure"
---

## The Problem

You'll occasionally have something that you want to test across multiple browsers. It would be nice to run your test once and have it execute against all of the browsers you care about. Unfortunately this functionality doesn't come out of the box with most testing frameworks.

## A Solution

With the help of Sauce Labs, a collection, and a loop, we can easily specify a list of browsers and run a test against each of them.

Let's take a look at an example.

## An Example

To start, we include our dependent libraries (`'selenium-webdriver'` to drive the browser, and `'rspec-expectations'` to perform our assertion) and then wire up `setup` and `teardown` methods.

In `setup` we are accepting two parameters -- `browser_name` and `browser_version`. We put these to use when specifying the browser and operating system capabilities for Sauce Labs, which gets stored in the `caps` variable. This variable then gets passed in as part of the `@driver` incantation.

And in `teardown` we destroy the browser session.

```ruby
# filename: example.rb

require 'selenium-webdriver'
require 'rspec-expectations'

def setup(browser_name, browser_version)
  caps = Selenium::WebDriver::Remote::Capabilities.send(browser_name.to_sym)
  caps.platform = 'Windows XP'
  caps.version = browser_version.to_s

  @driver = Selenium::WebDriver.for(
    :remote,
    url: "http://#{ENV['SAUCE_USERNAME']}:#{ENV['SAUCE_API_KEY']}@ondemand.saucelabs.com:80/wd/hub",
    desired_capabilities: caps)
end

def teardown
  @driver.quit
end
```

Note the `url:` in the `@driver` section above. It is concatenated from environment variables that are set at run time; like so.

```sh
SAUCE_USERNAME='your sauce username' SAUCE_API_KEY='your sauce api key' ruby example.rb
```

Next we specify the browsers and versions we care about in a collection (e.g., a Hash), create a `run` method, and wire it up to loop over the collection -- running `setup`, test actions, and `teardown` for each browser in the collection.

```ruby
BROWSERS = { firefox: '27',
             chrome: '32',
             internet_explorer: '8' }

def run
  BROWSERS.each_pair do |browser, browser_version|
    setup(browser, browser_version)
    yield
    teardown
  end
end
```

Once we have that, we wire up our test.

```ruby
run do
  @driver.get 'http://the-internet.herokuapp.com'
  @driver.title.should == 'The Internet'
end
```

And when we run it, we should see three jobs appear in Sauce Labs.

## Expected Behavior

+ Load Firefox, load the page, assert the title is correct
+ Load Chrome, load the page, assert the title is correct
+ Load IE, load the page, assert the title is correct

## Outro

Hopefully this tip has helped make multi-browser testing more approachable to you. In a future tip I'll cover how to make this approach more robust, taking into account different operating systems and making things run in parallel.

Until then, Happy Testing!
