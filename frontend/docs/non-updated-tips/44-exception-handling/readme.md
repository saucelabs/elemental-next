---
title: "How To Handle Exceptions"
slug: "44-exception-handling"
number: 44
publish_date: 2015-07-01
tags:
  - "exceptions"
  - "exception handling"
  - "errors"
  - "error handling"
  - "no such element error"
  - "stale element reference error"
level: 2
category: "testing"
---

## The Problem

It doesn't take long when using Selenium before you run into errors from Selenium that may seem inexplicable (e.g., `NoSuchElementError` or `StaleElementReferenceError`). They can be a bit of a shock if you're not sure what they are, how to handle them, or where to find documentation on how to address them.

## A Solution

By adding some simple exception handling we can catch Selenium's errors and make our tests more resilient.

Let's take a look at an example.

## An Example

For this example we'll use [a login example](http://the-internet.herokuapp.com/login) from [the-internet](http://github.com/tourdedave/the-internet).

First let's require our necessary libraries (e.g., `selenium-webdriver` to control the browser and `rspec/expectations` & `RSpec::Matchers` for our assertions) and wire up some simple `setup`, `teardown`, and `run` methods.

```ruby
# filename: exception_handling.rb

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

To demonstrate the problem, let's wire up a simple test to exercise the login page. After logging in we'll check to see that the login form is no longer displayed.

```ruby
run do
  @driver.get 'http://the-internet.herokuapp.com/login'
  @driver.find_element(id: 'username').send_keys('tomsmith')
  @driver.find_element(id: 'password').send_keys('SuperSecretPassword!')
  @driver.find_element(id: 'login').submit
  expect(@driver.find_element(id: 'login').displayed?).to eql false
end
```

When we run this (e.g., `ruby exception_handling.rb` from the command-line) our test will not pass. It will log in just fine, but it will error when performing the assertion -- returning the following exception:

```text
Unable to locate element: {"method":"id","selector":"login"} (Selenium::WebDriver::Error::NoSuchElementError)
```

In the Python Selenium bindings they have a section of actions called [expected conditions](http://selenium-python.readthedocs.org/en/latest/api.html#module-selenium.webdriver.support.expected_conditions). One of them is designed specifically for this use case (called `visibility_of_element_located`). It checks to see if an element is displayed and returns `false` if it's not (rather than throwing an exception).

Unfortunately the Ruby Selenium bindings do not come with this functionality built-in, and there are no plans to add it. So let's step through how to do it ourselves. For that we'll need a simple understanding of exceptions and how to rescue them ([here's a quick primer](http://www.skorks.com/2009/09/ruby-exceptions-and-exception-handling/)) and the name of the exception we want to rescue. You can find a full list of the Selenium exceptions for Ruby [here](https://seleniumhq.github.io/selenium/docs/api/rb/Selenium/WebDriver/Error.html). But we shouldn't need all of them since our previous test run told us the name of the exception.

`Selenium::WebDriver::Error::NoSuchElementError` is the one we want. Let's put it to use by wrapping the last display check in our test with a `rescue` block, making it return `false` if it's triggered.

```ruby
run do
  @driver.get 'http://the-internet.herokuapp.com/login'
  @driver.find_element(id: 'username').send_keys('tomsmith')
  @driver.find_element(id: 'password').send_keys('SuperSecretPassword!')
  @driver.find_element(id: 'login').submit
  begin
    expect(@driver.find_element(id: 'login').displayed?).to eql false
  rescue Selenium::WebDriver::Error::NoSuchElementError
    false
  rescue Selenium::WebDriver::Error::StaleElementReferenceError
    false
  end
end
```

Now if we run the test (e.g., `ruby exception_handling.rb` from the command-line) it will pass. But this is far from a clean implementation. Let's spruce things up a little bit before we sign off on this.

```ruby
def rescue_exceptions
  begin
    yield
  rescue Selenium::WebDriver::Error::NoSuchElementError
    false
  rescue Selenium::WebDriver::Error::StaleElementReferenceError
    false
  end
end

def is_displayed?(locator = {})
  rescue_exceptions { @driver.find_element(locator).displayed? }
end

run do
  @driver.get 'http://the-internet.herokuapp.com/login'
  @driver.find_element(id: 'username').send_keys('tomsmith')
  @driver.find_element(id: 'password').send_keys('SuperSecretPassword!')
  @driver.find_element(id: 'login').submit
  expect(is_displayed?(id: 'login')).to eql false
end
```

By breaking apart our rescue block (into a `rescue_exceptions` method) and our `displayed?` check (into an `is_displayed?` method) we're left with a cleaner (and reusable) implementation in our test code. And if you wanted to add another Selenium exception to the mix, then you would simply add a new `rescue` statement along with the result you want in `rescue_exceptions`.

```ruby
def rescue_exceptions
  begin
    yield
  rescue Selenium::WebDriver::Error::NoSuchElementError
    false
  rescue Selenium::WebDriver::Error::StaleElementReferenceError
    false
  end
end
```

__NOTE: `NoSuchElementError` and `StaleElementReferenceError` are the two most common errors you'll run into when using Selenium.__

## Expected Behavior

If you save the file and run it (e.g, `ruby exception_handling.rb` from the command-line) here is what will happen:

+ Open the browser
+ Visit the page
+ Log in
+ Check to see that the login form is NOT displayed
+ Catch the exception from Selenium and return `false` instead
+ Complete the assertion using the boolean response (e.g., `false`)
+ Close the browser

## Outro

Hopefully this tip has helped you learn how to work effectively with exceptions in Selenium.

Happy Testing!
