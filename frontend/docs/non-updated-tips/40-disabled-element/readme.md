---
title: "How To Test For Disabled Elements"
slug: "40-disabled-element"
number: 40
publish_date: 2015-07-06
tags:
  - "dropdown list"
  - "dropdown lists"
  - "disabled element"
level: 2
category: "testing"
---

## The Problem

On occasion you may have the need to check if an element on a page is disabled or enabled. Sounds simple enough, but how do you do it? It's not a well documented function of Selenium. So doing a trivial action like this can quickly become a pain.

## A Solution

If we look at [the API documentation for Selenium's Element class](https://seleniumhq.github.io/selenium/docs/api/rb/Selenium/WebDriver/Element.html) we can see there is an available method called `enabled?` that can help us accomplish what we want.

Let's take a look at how to use it.

## An Example

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
+ Grab all dropdown list elements and find the one we want by it's text
+ Assert that the element is not enabled
+ Close the browser

## Outro

Hopefully this tip has helped make the simple task of seeing if an element is enabled or disabled more approachable.

Happy Testing!
