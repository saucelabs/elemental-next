---
title: "How To Add Growl Notifications To Your Tests"
slug: "53-growl"
number: 53
publish_date: 2014-06-03
tags:
  - "jquery"
  - "growl"
  - "growl notifications"
  - "jquery-growl"
level: 2
category: "reporting"
---

## The Problem

Good test reports are a fundamental component of successful test automation. But running down a test failure by looking at a test report can be a real pain sometimes.

Leaving you with no choice but to roll up your sleeves and get your hands dirty with debug statements, or step through things piece by piece -- all for the sake of trying to track down a transient issue.

## A Solution

By leveraging something like [jQuery Growl](http://ksylvest.github.io/jquery-growl/) you can output non-interactive debugging statements directly to the page you're testing. This way you can see helpful information and more-likely correlate it to the test actions that are being taken. This can a boon for your test runs when coupled with screenshots and/or video recordings of your test runs 

Let's step through an example of how to set this up.

## An Example

First, we'll include our requisite libraries and wire up some simple `setup`, `teardown`, and `run` methods.

```ruby
# filename: growl.rb

require 'selenium-webdriver'
require 'rspec-expectations'
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

Next we'll need to visit the page we want to display notifications on and do some work with JavaScript to load [jQuery](http://jquery.com/), jQuery Growl, and styles for jQuery Growl. After that, we can issue commands to jQuery Growl to make notification messages display on the page.

```ruby
run do
  @driver.get 'http://the-internet.herokuapp.com'

  # Step 1: check for jQuery on the page, add it if needbe
  @driver.execute_script("if (!window.jQuery) {
    var jquery = document.createElement('script'); jquery.type = 'text/javascript';
    jquery.src = 'https://ajax.googleapis.com/ajax/libs/jquery/2.0.2/jquery.min.js';
    document.getElementsByTagName('head')[0].appendChild(jquery);
  }")

  # Step 2: use jQuery to add jquery-growl to the page
  @driver.execute_script("$.getScript('http://the-internet.herokuapp.com/js/vendor/jquery.growl.js')")

  # Step 3: use jQuery to add jquery-growl styles to the page
  @driver.execute_script("$('head').append('<link rel=\"stylesheet\" href=\"http://the-internet.herokuapp.com/css/jquery.growl.css\" type=\"text/css\" />');")

  # Step 4: display a message with jquery-growl
  @driver.execute_script("$.growl({ title: 'GET', message: '/' });")

  sleep 5 # to keep the browser active long enough to see the notifications
end
```

And if we wanted to see color-coded notifications, then we could use one of the following:

```ruby
  @driver.execute_script("$.growl.error({ title: 'ERROR', message: 'your error message goes here' });")
  @driver.execute_script("$.growl.notice({ title: 'Notice', message: 'your notice message goes here' });")
  @driver.execute_script("$.growl.warning({ title: 'Warning!', message: 'your warning message goes here' });")
```

## Expected Behavior

+ Load the page
+ Display a set of notification messages in the top-right corner of the page
+ Notification messages disappear

## Outro

In order to use this approach, you will need to load jQuery Growl on every page you want to display output to -- which can be a bit of overhead. But if you want rich messaging like this, then that's the price you have to pay (unless you can get your team to add it to the application under test).

In a future tip I'll step through how to access Selenium logging output so we can wire it up to these notifications.

I'd like to give a big thanks to Jon Austen ([Twitter](https://twitter.com/austenjt), [GitHub](https://github.com/djangofan), [Blog](http://jonausten.info/)) for giving me the idea to use jQuery Growl with Selenium.

Happy Testing!
