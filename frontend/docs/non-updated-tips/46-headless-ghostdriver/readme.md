---
title: "How To Run Your Tests Headlessly with GhostDriver"
slug: "46-headless-ghostdriver"
number: 46
publish_date: 2015-10-14
tags:
  - "headless"
  - "ghostdriver"
  - "phantomjs"
level: 2
category: "infrastructure"
---

## The Problem

In a previous tip I covered [how to run tests headlessly with Xvfb](/tips/38-headless). It's a good approach, but it only works in Linux. And you might be feeling underwhelmed by the speed of your test runs with this approach.

## A Solution

Enter [GhostDriver](https://github.com/detro/ghostdriver) and [PhantomJS](http://phantomjs.org/).

PhantomJS is a headless WebKit browser, and GhostDriver is an implementation of the WebDriver Wire Protocol that's built _into_ PhantomJS.

Setup is simple and your local test execution speeds will be much faster as a result (since it's a lean browser that offers full JavaScript rendering that doesn't penalize you with slow startup times).

Let's dig in with an example.

## An Example

Before we get started we need to grab a copy of PhantomJS from [the project download page](http://phantomjs.org/download.html).

Once we have it we can launch it from the command-line by specifying a `--webdriver` flag along with a port (e.g., `=8001`).

```sh
> phantomjs --webdriver=8001
PhantomJS is launching GhostDriver...
[INFO  - 2014-04-16T02:07:51.015Z] GhostDriver - Main - running on port 8001
```

Now that PhantomJS is running and ready to receive WebDriver commands (via GhostDriver), we can create an instance of Selenium that connects to it by using Selenium Remote.

To demonstrate, here's a simple test script.

```ruby
# filename: ghost_driver.rb

require 'selenium-webdriver'
require 'rspec/expectations'
include RSpec::Matchers

def setup
  @driver = Selenium::WebDriver.for :remote, url: 'http://localhost:8001'
end

def teardown
  @driver.quit
end

def run
  setup
  yield
  teardown
end

run do
  @driver.get 'http://the-internet.herokuapp.com'
  expect(@driver.title).to eql 'The Internet'
end
```

After pulling in our requisite libraries (e.g., `selenium-webdriver` to driver the browser and `rspec/expections` & `RSpec::Matchers` for our assertion) we wire up some simple `setup`, `teardown`, and `run` methods for our test configuration.

In `setup` we connect to GhostDriver by creating a Selenium Remote instance and specifying the URL of PhantomJS (e.g., `Selenium::WebDriver.for :remote, url: 'http://localhost:8001'`. The `run` block is our test. It visits the homepage of [the-internet](https://github.com/tourdedave/the-internet) and checks the title to verify that the page loaded.

## Expected Behavior

When we save this and run it (e.g., `ruby ghost_driver.rb` from the command-line) here is what will happen.

+ Open an instance of PhantomJS
+ Visit the site
+ Grab the title text from the page
+ Assert that the text includes `'The Internet'`
+ Close the instance of PhantomJS

## Outro

You can also run GhostDriver within Selenium Grid. You can learn more about that [here](https://github.com/detro/ghostdriver#register-ghostdriver-with-a-selenium-grid-hub). And with GhostDrive you also get access to normal full browser functionality like screenshotting. For more details on capturing screenshots, check out [tip 16](/tips/16-take-screenshot-on-failure).

Happy Testing!
