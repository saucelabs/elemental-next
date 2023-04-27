---
title: '44: Exception Handling'
sidebar_label: Ruby
text: "It doesn't take long when using Selenium before you run into errors from Selenium that may seem inexplicable (e.g., `NoSuchElementError` or `StaleElementReferenceError`). They can be a bit of a shock if you're not sure what they are, how to handle them, or where to find documentation on how to address them."
number: 44
publish_date: 2015-07-01
last_update:
  date: 2023-03-15
tags:
  - 'exceptions'
  - 'exception handling'
  - 'errors'
  - 'error handling'
  - 'no such element error'
  - 'stale element reference error'
level: 2
category:
  - 'troubleshooting'
language: ruby
---

# How To Handle Exceptions

## Intro

It doesn't take long when using Selenium before you run into errors from Selenium that may seem inexplicable (e.g., `NoSuchElementError` or `StaleElementReferenceError`). They can be a bit of a shock if you're not sure what they are, how to handle them, or where to find documentation on how to address them.

## A Solution

By adding some simple exception handling we can catch Selenium's errors and make our tests more resilient.

Let's take a look at an example.

## Example 1

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

def wait_for(seconds)
  Selenium::WebDriver::Wait.new(timeout: seconds).until { yield }
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

To demonstrate the problem, let's write a basic test to exercise the login page. After logging in, we'll check to see that the login form is no longer displayed.

```ruby
run do
  @driver.get 'http://the-internet.herokuapp.com/login'
  @driver.find_element(id: 'username').send_keys('tomsmith')
  @driver.find_element(id: 'password').send_keys('SuperSecretPassword!')
  @driver.find_element(id: 'login').submit
  wait_for(10) { @driver.find_element(css: '.icon-2x').displayed? }
  expect(@driver.find_element(id: 'login').displayed?).to eql false
end
```

When we run this (e.g., `ruby exception_handling.rb` from the command-line) our test will not pass. It will log in just fine, but it will error when performing the assertion -- returning the following exception:

```text
Unable to locate element: {"method":"id","selector":"login"} (Selenium::WebDriver::Error::NoSuchElementError)
```

In the Python Selenium bindings they have a section of actions called [expected conditions](https://www.selenium.dev/selenium/docs/api/py/webdriver_support/selenium.webdriver.support.expected_conditions.html). One of them is designed specifically for this use case (called `visibility_of_element_located`). It checks to see if an element is displayed and returns `false` if it's not (rather than throwing an exception).

Unfortunately the Ruby Selenium bindings do not come with this functionality built-in, and there are no plans to add it. So let's go through how to do it ourselves. For that we'll need a basic understanding of exceptions and how to rescue them ([here's a quick primer](https://skorks.com/2009/09/ruby-exceptions-and-exception-handling/)) and the name of the exception we want to rescue. You can find a full list of the Selenium exceptions for Ruby [here](https://seleniumhq.github.io/selenium/docs/api/rb/Selenium/WebDriver/Error.html). But we shouldn't need all of them since our previous test run told us the name of the exception.

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

Now if we run the test (e.g., `ruby exception_handling.rb` from the command-line) it will pass. But this is far from a clean implementation. Let's clean things up a bit.

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

## Example 2

If your test is still failing, it might not have enough time to find the `login` element. In this case, you will have to add a `wait` to your test.

```ruby
# exception-with-wait.rb

def wait_for(seconds)
  Selenium::WebDriver::Wait.new(timeout: seconds).until { yield }
end
```

Also add this line to your run code, just before the `expect` line:

```ruby
# exception-with-wait.rb

wait_for(10) { @driver.find_element(css: '.icon-2x').displayed? }
```

__The full script with `wait` added will be as follows:__

```ruby
# exception-with-wait.rb

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

def wait_for(seconds)
  Selenium::WebDriver::Wait.new(timeout: seconds).until { yield }
end


run do
  @driver.get 'http://the-internet.herokuapp.com/login'
  @driver.find_element(id: 'username').send_keys('tomsmith')
  @driver.find_element(id: 'password').send_keys('SuperSecretPassword!')
  @driver.find_element(id: 'login').submit
  wait_for(10) { @driver.find_element(css: '.icon-2x').displayed? }
  expect(is_displayed?(id: 'login')).to eql false
end
```

## Expected Behavior

If you save the file and run it (e.g, `ruby exception_handling.rb` from the command-line) here is what will happen:

+ Open the browser
+ Visit the page
+ Log in
+ Check to see that the login form is NOT displayed
+ Catch the exception from Selenium and return `false` instead
+ Complete the assertion using the boolean response (e.g., `false`)
+ Close the browser

## Summary

Hopefully this tip has helped you learn how to work effectively with exceptions in Selenium.

Happy Testing!

## About The Author

Dave Haeffner is the original writer of Elemental Selenium -- a free, once weekly Selenium tip newsletter that's read by thousands of testing professionals. He also created and maintains the-internet (an open-source web app that's perfect for writing automated tests against).

Dave has helped numerous companies successfully implement automated acceptance testing; including The Motley Fool, ManTech International, Sittercity, and Animoto. He is also an active member of the Selenium project and has spoken at numerous conferences and meetups around the world about automated acceptance testing.
