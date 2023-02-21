---
title: "How To Work With Hovers"
slug: "50-hovers"
number: 50
publish_date: 2015-07-01
tags:
  - "hover"
  - "hovers"
  - "action builder"
level: 1
category: "testing"
---

## The Problem

If you need to work with mouse hovers in your tests it may not be obvious how to do this with Selenium. And a quick search through the documentation will likely leave you befuddled forcing you to go spelunking through StackOverflow for the solution.

## A Solution

By leveraging Selenium's [Action Builder](https://seleniumhq.github.io/selenium/docs/api/rb/Selenium/WebDriver/ActionBuilder.html) we can handle more complex user interactions like hovers. This is done by telling Selenium which element we want to move the mouse to, and then performing what we need to after.

Let's dig in with an example.

## An Example

Our example application is available [here](http://the-internet.herokuapp.com/hovers) on [the-internet](http://github.com/tourdedave/the-internet). It has a few avatars displayed in a grid layout. When you hover over each of them, they display additional user information and a link to view a full profile.

Let's write a test that will hover over the first avatar and make sure that this additional information appears.

First, we'll want to include our requisite libraries (e.g., `selenium-webdriver` to control the browser, and `rspec/expectations` and `RSpec::Matchers` for our assertion) and wire up some `setup`, `teardown`, and `run` methods.

```ruby
# filename: hover.rb

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

Now let's write our test.

```ruby
run do
  @driver.get 'http://the-internet.herokuapp.com/hovers'
  an_avatar = @driver.find_element(class: 'figure')
  @driver.action.move_to(an_avatar).perform
  expect(@driver.find_element(class: 'figcaption').displayed?).to eql true
end
```

After loading the page we find the first avatar and store it in a variable (`an_avatar`). We then use Selenium's `action.move_to` method and feed the avatar variable to it (which triggers the hover).

We then check to see if the additional user information is displayed with `.displayed?` and wrap that in an assertion.

## Expected Behavior

If we save this file and run it (e.g., `ruby hover.rb` from the command-line) here is what will happen:

+ Open the browser
+ Visit the page
+ Hover over the first avatar
+ Assert that the caption appeared on the page
+ Close the browser

## Outro

Happy Testing!
