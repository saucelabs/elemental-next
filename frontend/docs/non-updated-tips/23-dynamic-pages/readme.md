---
title: "How to Test Dynamic Pages"
slug: "23-dynamic-pages"
number: 23
publish_date: 2015-10-13
tags:
  - "dynamic pages"
  - "ajax"
  - "javascript"
  - "waiting"
  - "explicit waits"
level: 2
category: "testing"
---

## The Problem

Let's say you want to test some functionality of a web application but it loads things dynamically. You might reach for a hard-coded sleep (that you constantly tweak due to test failures) or you use a blanket timeout (like an [implicit wait](https://github.com/SeleniumHQ/selenium/wiki/Ruby-Bindings#implicit-waits)) that you likely bump up to address test instabilities as well.

This _may_ work in the short term, but your tests are now slower and leaving you (and your team) feeling like your test automation is on shaky ground -- uncertain of when the next break/fix cycle will happen.

## A Solution

By using a flexible wait strategy you can easily meet the rigors of testing dynamic web applications.

Thankfully Selenium comes with one built in -- Explicit Waits. With them you specify a timeout and an action. Selenium will repeatedly try that action until it can either complete it successfully (at which point it will move onto the next step of the test), or it will throw a timeout exception (causing your test to error).

Let's dig in with an example.

## An Example

Let's use from [the-internet](https://github.com/tourdedave/the-internet) which load content dynamically ([link](http://the-internet.herokuapp.com/dynamic_loading)). On it there is a `Start` button that when clicked will trigger a loading bar to appear for 5 seconds. After that time it will disappear and a new element with the text `'Hello World!'` will appear.

We'll start by requiring our dependent libraries (`selenium-webriver` to drive the browser and `rspec/expectations` & `RSpec::Matchers` to perform our assertions) and wiring up some `setup`, `teardown`, and `run` methods to handle our test configuration.

```ruby
# filename: dynamic_loading.rb

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

Now we can create our first test. In it we'll visit the page, click the start button, wait for the finish text to appear, and assert that it appeared.

```ruby
run do
  @driver.get 'http://the-internet.herokuapp.com/dynamic_loading/2'
  @driver.find_element(css: '#start button').click
  Selenium::WebDriver::Wait.new(timeout: 6).until { @driver.find_element(id: 'finish').displayed? }
  expect(@driver.find_element(id: 'finish').displayed?).to eql true
end
```

In the code above we are using an explicit wait with a timeout of `6` seconds (e.g. `Selenium::WebDriver::Wait.new(timeout: 6).until`), looking for the element with the finish text (e.g., `@driver.find_element(id: 'finish')`, and seeing if it's displayed (e.g., `.displayed?`).

If we set the timeout too low (e.g. `timeout: 2`) Selenium won't wait long enough for the loading bar to finish, which will trigger the timeout threshold and throw an exception (e.g. `until': timed out after 2 seconds (Selenium::WebDriver::Error::TimeOutError)`).

And if we didn't use an explicit wait at all, the test would have errored because Selenium would have tried to check for the finish text before it displayed and return a `NoSuchElement` exception (e.g., `Unable to locate element: {"method":"css selector","selector":"#finish"} (Selenium::WebDriver::Error::NoSuchElementError)`).

For applications that already have the target element on the page but have it hidden, this approach will work as well (which we can see by pointing our test at the other dynamic loading example).

```ruby
run do
  @driver.get 'http://the-internet.herokuapp.com/dynamic_loading/1'
  @driver.find_element(css: '#start button').click
  Selenium::WebDriver::Wait.new(timeout: 6).until { @driver.find_element(id: 'finish').displayed? }
  expect(@driver.find_element(id: 'finish').displayed?).to eql true
end
```

## A Small Bit of Cleanup

Explicit waits are a useful tool to have in your toolbelt since they enable you to finely tune your tests and avoid static sleeps and arbitrary timeouts. But rather than litter your test code with the verbose Selenium incantation, it's best to pull this code out into a method that accepts a timeout argument and the action you want to wait for as a block.

You can then clean up our test code and reuse this method whenever an explicit wait is needed.

```ruby
def wait_for(seconds = 6)
  Selenium::WebDriver::Wait.new(:timeout => seconds).until { yield }
end

run do
  @driver.get 'http://the-internet.herokuapp.com/dynamic_loading/1'
  @driver.find_element(css: '#start button').click
  wait_for { @driver.find_element(id: 'finish').displayed? }
  expect(@driver.find_element(id: 'finish').displayed?).to eql true
end
```

## Expected Behavior

When you save the file and run it (e.g., `ruby dynamic_loading.rb` from the command-line) here is what will happen:

+ Open the browser
+ Visit the page
+ Click the Start button
+ Wait for the loading bar to disappear and display the finish text
+ Assert that the finish text element is displayed
+ Close the browser

## Outro

Hopefully this tip will help you build more efficient and resilient tests when faced with dynamic pages that are constructed in various ways.

If you want to take the idea of abstraction a bit further then have a look at tips [9](/tips/9-use-a-base-page-object) and [28](/tips/28-upgrading-from-rc) where this kind of abstraction is covered in more detail. And if you want more insight into the differences between implicit and explicit waits, check out [tip 47](/tips/47-waiting).

Happy Testing!
