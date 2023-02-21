---
title: "How To Use Safari"
slug: "69-safari"
number: 69
publish_date: 2015-08-25
tags:
  - "safari"
  - "drivers"
  - "safaridriver"
  - "different browsers"
level: 1
category: "setup"
---

## The Problem

Running your Selenium tests on a different browser tends to require additional setup, and [SafariDriver](https://github.com/SeleniumHQ/selenium/wiki/SafariDriver) is no exception.

## A Solution

Since Selenium 2.45.0, in order to use SafariDriver, you need to manually install the SafariDriver browser extension.

Let's step through how to do it and make sure it's working.

## An Example

The prebuilt SafariDriver extension can be downloaded from [here](http://selenium-release.storage.googleapis.com/index.html?path=2.48/) (the link is listed in [the __Getting Started__ section of the SafariDriver Selenium Wiki](https://github.com/SeleniumHQ/selenium/wiki/SafariDriver#getting-started)). Download it, double-click it, and click `Trust` when prompted.

After that, make sure it's enabled. To do that:

1. open `Safari`
2. go to `Preferences`
3. click on the `Extensions` tab
4. Make sure `Enable WebDriver` is checked
5. Close `Safari`

<img src='/img/safari-extension.png'/>

Now if we open up an interactive Ruby terminal (e.g., `irb`) and launch a Selenium instance, here's what we'd see.

```sh
> irb
irb(main):001:0> require 'selenium-webdriver'
irb(main):002:0> driver = Selenium::WebDriver.for :safari
```

<img src='/img/safari-success.png'/>

A successful communication between Safari and the Selenium Driver extension has occurred.

Now let's wire up a simple test so we can see that everything works as expect.

```ruby
# filename: safari.rb

require 'selenium-webdriver'
require 'rspec/expectations'
include RSpec::Matchers

def setup
  @driver = Selenium::WebDriver.for :safari
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

## Expected Behavior

When you save the file and run it (e.g., `ruby safari.rb` from the command-line), here is what will happen:

+ Safari opens
+ The home page of [the-internet](http://github.com/tourdedave/the-internet) loads
+ The title of the page is checked to make sure it's what we expect
+ Safari closes

## Outro

Keep in mind that Safari can load without you realizing it (since it doesn't obtain focus when launching with Selenium). When that happens you'll need to switch to Safari in order to see what the test is doing.

And if you're running Safari on a remote node (or set of nodes), you'll need to install and enable the SafariDriver browser extension on each of them.

Happy Testing!
