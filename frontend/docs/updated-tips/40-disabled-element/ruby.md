---
title: 'Ruby'
id: '40-disabled-element-ruby'
slug: ruby/
number: 40
publish_date: 2015-07-06
last_update:
  date: 2023-03-02
tags:
  - 'dropdown list'
  - 'dropdown lists'
  - 'disabled element'
level: 2
category:
  - remote
  - troubleshooting
language: ruby
---

# How to Test For Disabled Elements

## Intro

On occasion you may have the need to check if an element on a page is disabled or enabled. Unfortunately, this is not a well-documented function of Selenium, so doing a trivial action like this can quickly become a pain.

## A Solution

If we look at [the API documentation for Selenium's Element class](https://seleniumhq.github.io/selenium/docs/api/rb/Selenium/WebDriver/Element.html) we can see there is an available method called `enabled?` that can help us accomplish what we want.

Let's take a look at how to use it.

## Example

For this example we will use [a dropdown list](http://github.com/tourdedave/the-internet) from [the-internet](http://the-internet.herokuapp.com/dropdown). In this list there a few options to select, one which should be disabled. Let's find this element and assert that it is disabled.

First let's require our dependent libraries (e.g., `selenium-webdriver` to control the browser and `rspec/expectations` and `RSpec::Matchers` for our assertion) and wire up some simple `setup`, `teardown`, and `run` methods.

```ruby
# filename: dropdown_disabled.rb

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

Now let's wire up our test.

```ruby
run do
  @driver.get 'http://the-internet.herokuapp.com/dropdown'
  dropdowns = @driver.find_elements(tag_name: 'option')
  item_of_interest = dropdowns.find { |dropdown| dropdown.text == 'Please select an option' }
  expect(item_of_interest.enabled?).to eql false
end
```

After loading the page, we find all of the elements that have an option tag (which are all of the items in the dropdown list). This will return an array, so we iterate over the collection and find the item we want based on a text comparison.

Once we have the element we want we see if it's enabled (with `.enabled?`) and assert based on the response.

## Expected Behavior

If you save this file and run it (e.g., `ruby dropdown_disabled.rb` from the command-line) here is what will happen:

+ Open a browser
+ Visit the page
+ Grab all dropdown list elements and find the one we want by its text
+ Assert that the element is not enabled
+ Close the browser

## Summary

Hopefully this tip has helped make the task of seeing whether or not an element is enabled or disabled more approachable.

Happy Testing!

## About The Author

Dave Haeffner is the original writer of Elemental Selenium -- a free, once weekly Selenium tip newsletter that's read by thousands of testing professionals. He also created and maintains the-internet (an open-source web app that's perfect for writing automated tests against).

Dave has helped numerous companies successfully implement automated acceptance testing; including The Motley Fool, ManTech International, Sittercity, and Animoto. He is also an active member of the Selenium project and has spoken at numerous conferences and meetups around the world about automated acceptance testing.
