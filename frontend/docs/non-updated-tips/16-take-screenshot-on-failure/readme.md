---
title: "How To Take A Screenshot on Failure"
slug: "16-take-screenshot-on-failure"
number: 16
publish_date: 2015-07-08
tags:
  - "reporting"
  - "screenshot"
level: 2
category: "reporting"
---

## The Problem

With browser tests it can often be challenging to track down the issue that caused a failure. By itself a failure message along with a stack trace is hardly enough to go on. Especially when you run the test again and it passes.

## A Solution

A simple way to gain insight into your test failures is to capture screenshots at the moment of failure. And it's a quick and easy thing to add to your tests.

Let's dig in with an example.

## An Example

Let's start by including our requisite libraries (`selenium-webdriver` to drive the browser and `rspec/expectations` & `RSpec::Matchers` for our assertion) and wire up some simple `setup` and `teardown` methods.

```ruby
# filename: screenshot.rb

require 'selenium-webdriver'
require 'rspec/expectations'
include RSpec::Matchers

def setup
  @driver = Selenium::WebDriver.for :firefox
end

def teardown
  @driver.quit
end
```

Next we'll want to create a method to execute our tests. This is where we'll capture when a failure occurs and take a screenshot.

```ruby
def run
  setup
  begin
    yield
  rescue RSpec::Expectations::ExpectationNotMetError => error
    puts error.message
    @driver.save_screenshot "./#{Time.now.strftime("failshot__%d_%m_%Y__%H_%M_%S")}.png"
  end
  teardown
end
```

After calling `setup` and before calling `teardown` we wrap our test code execution (e.g., `yield`) in a `rescue` block. This handles the exception that a test failure will return. When a failure occurs the error message will get outputted to the terminal (just like it normally would) but now we are also capturing a screenshot through the help of Selenium's `.save_screenshot` method.

`.save_screenshot` accepts a filename as a string (e.g., `'failshot.png'`). When this command executes it will save an image file to your local system in the current working directory.

Note the use of `Time.now.strftime` in the screenshot filename. This is adding a timestamp (down to the second) to the filename. This provides a (reasonably) unique file name and has the added benefit of listing the files in the order taken.

Now let's wire up our test.

```ruby
run do
  @driver.get 'http://the-internet.herokuapp.com'
  expect(@driver.find_element(css: 'h1').text).to eql 'blah blah blah'
end
```

## Expected Behavior

If we save this file and run it (`ruby screenshot.rb` from the command-line) here is what would happen:

+ Open the browser
+ Load the homepage of [the-internet](http://github.com/tourdedave/the-internet)
+ Check the text of the page header and fail
+ Output a failure message in the terminal
+ Capture a timestamped screenshot in the current working directory
+ Close the browser

## Outro

For more info on `strftime` (a.k.a. String Formatted Time) go [here](http://apidock.com/ruby/DateTime/strftime).

But if you want truly unique filenames, then you should use a unique ID in the filename instead of a timestamp (e.g., something like [`uuid`](https://github.com/assaf/uuid)). This will prevent screenshots from getting overwritten when you have two (or more) tests taking screenshots at the same time.

Happy Testing!
