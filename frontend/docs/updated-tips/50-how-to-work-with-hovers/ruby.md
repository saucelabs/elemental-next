---
title: '50: How To Work With Hovers'
id: '50-hovers-ruby'
slug: ruby/
number: 50
publish_date: 2015-07-01
last_update:
  date: 2023-02-22
tags:
  - 'hover'
  - 'hovers'
  - 'action builder'
level: 1
category:
  - 'fundamentals'
language: ruby
---

# How to Work with Hovers

## Intro

If you need to work with mouse hovers in your tests, it might not be obvious how to do this with Selenium. A quick search through the official Selenium documentation can also be confusing, and might leave you scouring online forums and search engines for the solution.

## A Solution

The most popular use case for a hover action is to display additional menu options(submenu.)

By leveraging Selenium's [Actions](https://seleniumhq.github.io/selenium/docs/api/rb/Selenium/WebDriver/ActionBuilder.html) we can handle more complex user interactions like hovers. This is done by telling Selenium which element we want to move the mouse to, and then performing what we need to after.

## Example

Our example application is available [here](http://the-internet.herokuapp.com/hovers) on [the-internet](http://github.com/tourdedave/the-internet). It has a few avatars displayed in a grid layout. When you hover over each of them, they display additional user information and a link to view a full profile.

We're going to write a test that will hover over the first avatar and make sure that this additional information appears.

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


## Summary

Hopefully this will help you handle more complex user interactions like hovers.

Happy Testing!

## About The Author

Dave Haeffner is the original writer of Elemental Selenium -- a free, once weekly Selenium tip newsletter that's read by thousands of testing professionals. He also created and maintains the-internet (an open-source web app that's perfect for writing automated tests against).

Dave has helped numerous companies successfully implement automated acceptance testing; including The Motley Fool, ManTech International, Sittercity, and Animoto. He is also an active member of the Selenium project and has spoken at numerous conferences and meetups around the world about automated acceptance testing.
