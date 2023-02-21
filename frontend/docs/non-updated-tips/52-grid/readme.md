---
title: "How To Use Selenium Grid"
slug: "52-grid"
number: 52
publish_date: 2015-08-25
tags:
  - "grid"
  - "selenium grid"
  - "cross browser"
level: 2
category: "infrastructure"
---

## The Problem

If you're looking to run your tests on different browser and operating system combinations but you're unable to justify using a third-party solution like [Sauce Labs](https://saucelabs.com/) or [Browser Stack](http://www.browserstack.com/) then what do you do?

## A Solution

With [Selenium Grid](https://github.com/SeleniumHQ/selenium/wiki/Grid2) you can stand up a simple infrastructure of various browsers on different operating systems to not only distribute test load, but also give you a diversity of browsers to work with.

## A brief Selenium Grid primer

Selenium Grid is part of [the Selenium project](http://www.seleniumhq.org/). It lets you distribute test execution across several machines. You can connect to it with Selenium Remote by specifying the browser, browser version, and operating system you want. You specify these values through Selenium Remote's `Capabilities`.

There are two main elements to Selenium Grid -- a hub, and nodes. First you need to stand up a hub. Then you can connect (or "register") nodes to that hub. Nodes are where your tests will run, and the hub is responsible for making sure your tests end up on the right one (e.g., the machine with the operating system and browser you specified in your test).

Let's step through an example.

## An Example

### Part 1: Grid Setup

Selenium Grid comes built into the Selenium Standalone Server. So to get started we'll need to download the latest version of it from [here](http://selenium-release.storage.googleapis.com/index.html).

Then we need to start the hub.

```sh
> java -jar selenium-server-standalone-2.47.1.jar -role hub
19:05:12.718 INFO - Launching Selenium Grid hub
...
```

After that we can register nodes to it.

```sh
> java -jar selenium-server-standalone-2.47.1.jar -role node -hub http://localhost:4444/grid/register
19:05:57.880 INFO - Launching a Selenium Grid node
...
```

__NOTE: This example only demonstrates a single node on the same machine as the hub. To span nodes across multiple machines you will need to place the standalone server on each machine and launch it with the same registration command (replacing `http://localhost` with the location of your hub, and specifying additional parameters as needed).__

Now that the grid is running we can view the available browsers by visiting our Grid's console at `http://localhost:4444/grid/console`.

<img src='/img/grid-console.png'/>

To refine the list of available browsers, we can specify an additional `-browser` parameter when registering the node. For instance, if we wanted to only offer Safari on a node, we could specify it with `-browser browserName=safari`, which would look like this:

```sh
java -jar selenium-server-standalone-2.42.0.jar -role node -browser browserName=safari -hub http://localhost:4444/grid/register
```

We could also repeat this parameter again if we wanted to explicitly specify more than one browser.

```sh
java -jar selenium-server-standalone-2.42.0.jar -role node -browser browserName=safari -browser browserName=chrome -browser browserName=firefox -hub http://localhost:4444/grid/register
```

There are numerous parameters that we can use at run time. You can see a full list [here](https://github.com/SeleniumHQ/selenium/wiki/Grid2#optional-parameters).

### Part 2: Test Setup

Now let's wire up a simple test script to use our new Grid.

First, we'll need to require our necessary libraries (e.g., `selenium-webdriver` to connect to the Grid/control the browser and `rspec/expectations` & `RSpec::Matchers` for an assertion), wire up some simple `setup`, `teardown`, and `run` methods, and add a simple test.

```ruby
# filename: grid.rb

require 'selenium-webdriver'
require 'rspec/expectations'
include RSpec::Matchers

def setup
  @driver = Selenium::WebDriver.for(
    :remote,
    url: 'http://localhost:4444/wd/hub',
    desired_capabilities: :firefox) # you can also use :chrome, :safari, etc.
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
  expect(@driver.title).to eq('The Internet')
end
```

Notice in this configuration we're using Selenium Remote (e.g., `Selenium::WebDriver.for(:remote,`) to connect to the grid. And we are telling the grid which browser we want to use with `desired_capabilities` (e.g., `desired_capabilities: :firefox`).

An alternative way to configure this would be to create a Selenium Remote Capabilities object for the browser we want, modify it as needed, and then pass _it_ to `desired_capabilities`.

```ruby
caps = Selenium::WebDriver::Remote::Capabilities.firefox
caps[:platform] = :mac # you can also use :any, :win, or :x

@driver = Selenium::WebDriver.for(
  :remote,
  url: 'http://localhost:4444/wd/hub',
  desired_capabilities: caps)
```

You can see a full list of the available Selenium `Capabilities` options [here](https://github.com/SeleniumHQ/selenium/wiki/DesiredCapabilities).

## Expected Behavior

When we save this file and run it (e.g., `ruby grid.rb` from the command-line) here is what will happen:

+ connect to the grid
+ hub determines which node has the necessary browser/platform combination and connects the test to it
+ hub opens an instance of the browser on the node
+ test runs
+ browser closes on the node

## Outro

If you're looking to set up Selenium Grid to work with Internet Explorer or Chrome, be sure to read up on how to set them up since there is additional configuration required for each. And if you run into issues, be sure to check out the browser driver documentation for the browser you're working with:

+ [ChromeDriver](https://github.com/SeleniumHQ/selenium/wiki/ChromeDriver)
+ [FirefoxDriver](https://github.com/SeleniumHQ/selenium/wiki/FirefoxDriver)
+ [InternetExplorerDriver](https://github.com/SeleniumHQ/selenium/wiki/InternetExplorerDriver)
+ [SafariDriver](https://github.com/SeleniumHQ/selenium/wiki/SafariDriver)

Also, it's worth noting that while Selenium Grid is a great option for scaling your test infrastructure, it by itself will NOT give you parallelization. That is to say, it can handle as many connections as you throw at it (within reason), but you will still need to find a way to execute your tests in parallel. You can see some previous write-ups on how to accomplish that [here](http://elementalselenium.com/tips/tags/parallelization).

Happy Testing!
