---
title: '45: How To Test Checkboxes'
id: '45-checkboxes-ruby'
sidebar_label: Ruby 
text: "Checkboxes are an often used element in web applications. This guide will show you how to work with them in your Selenium tests."
number: 45
publish_date: 2015-10-13
last_update:
  date: 2023-02-22
tags:
  - 'checkboxes'
  - 'attribute'
  - 'selected'
level: 1
category:
  - 'fundamentals'
language: ruby
---

# How to Test Checkboxes

## Intro

Checkboxes are an often used element in web applications. This guide will show you how to work with them in your Selenium tests.

Intuitively you may reach for a method that has the word 'checked' in it -- like `.checked` or `.is_checked` but this doesn't exist in Selenium.

## A Solution

There are two ways to approach this issue -- by seeing if an element has a `checked` attribute (a.k.a. performing an attribute lookup), or by asking an element if it has been _selected_.

We're going to go through each of these approaches to see their pros and cons.

## Example

For reference, here is the markup from [the page we will be testing against](http://the-internet.herokuapp.com/checkboxes) (an example from [the-internet](https://github.com/tourdedave/the-internet)).

```html
<form>
  <input type="checkbox"> unchecked<br>
  <input type="checkbox" checked=""> checked
</form>
```

We kick things off by requiring our dependent libraries (e.g., `selenium-webdriver` to drive the browser, and `rspec/expectations` & `RSpec::Matchers` to handle our assertions) and wire up some simple `setup`, `teardown`, and `run` methods to abstract our test configuration.

```ruby
# filename: checkboxes.rb

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

Before we write any tests, let's walk through both checkbox approaches to see what Selenium gives us.

To do that we'll want to grab all of the checkboxes on the page, and iterate through them. Once using an attribute lookup, and again asking if the element is selected -- each time outputting the return value we get from Selenium.

```ruby
run do
  @driver.get 'http://the-internet.herokuapp.com/checkboxes'
  checkboxes = @driver.find_elements(css: 'input[type="checkbox"]')

  puts "With .attribute('checked')"
  checkboxes.each { |checkbox| puts checkbox.attribute('checked').inspect }

  puts "\nWith .selected?"
  checkboxes.each { |checkbox| puts checkbox.selected?.inspect }
end
```

When we save our file and run it (e.g., `ruby checkboxes.rb` from the command-line), here is the output we'll see.

```sh
With .attribute('checked')
nil
"true"

With .selected?
false
true
```

With the attribute lookup, depending on the state of the checkbox, we receive either a `nil` or a string with the value `"true"`. Whereas with `.selected?` we get a boolean (`true` or `false`) response.

Let's see what these approaches look like when put to use in a test.

```ruby
run do
  @driver.get 'http://the-internet.herokuapp.com/checkboxes'
  checkboxes = @driver.find_elements(css: 'input[type="checkbox"]')
  expect(checkboxes.last.attribute('checked')).not_to be_nil
  # alternatively
  expect(checkboxes.last.attribute('checked')).to eql("true")
end
```

With an attribute lookup, the simplest thing to do is to assert that the return value is not `nil`. Alternatively we could have checked for the value `"true"`. Let's see what the other approach looks like.

```ruby
run do
  @driver.get 'http://the-internet.herokuapp.com/checkboxes'
  checkboxes = @driver.find_elements(css: 'input[type="checkbox"]')
  expect(checkboxes.last.selected?).to eql true
end
```

When checking to see if a checkbox has been selected, it's a straightforward matter of checking for a boolean value.

## Expected Behavior

When you save and run the file (e.g., `ruby checkboxes.rb` from the command-line) here is what will happen:

+ Open the browser
+ Visit the page
+ Find all of the checkboxes on the page
+ Assert that the last checkbox (the one that is supposed to be checked on initial page load) is checked
+ Close the browser

## Summary

Attribute lookups are generally meant for pulling information out of the page for review, however, in this case they lend themselves to seeing if a checkbox is checked. There is a method which was built for this use case that is more readable and has a predictable set of return values. `isSelected` should be the thing you reach for, knowing that an attribute lookup is there as a solid backup if you find you need it.

## About The Author

Dave Haeffner is the original writer of Elemental Selenium -- a free, once weekly Selenium tip newsletter that's read by thousands of testing professionals. He also created and maintains the-internet (an open-source web app that's perfect for writing automated tests against).

Dave has helped numerous companies successfully implement automated acceptance testing; including The Motley Fool, ManTech International, Sittercity, and Animoto. He is also an active member of the Selenium project and has spoken at numerous conferences and meetups around the world about automated acceptance testing.
