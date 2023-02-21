---
title: "How To Select From a Dropdown List"
slug: "5-select-from-a-dropdown"
number: 5
publish_date: 2015-07-06
tags:
  - "dropdown"
  - "forms"
level: 1
category: "testing"
---

## The Problem

Selecting from a dropdown list *seems* like one of those simple things. Just grab the list by it's element and select an item within it based on the text you want.

While it sounds pretty straightforward, there is a bit more finesse to it.

Let's take a look at a couple of different approaches.

## An Example

First let's pull in our requisite libraries and wire up some simple `setup`, `teardown`, and `run` methods.

```ruby
# filename: dropdown.rb

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

Now lets' wire up our test.

```ruby
# filename: dropdown.rb
...
run do
  @driver.get 'http://the-internet.herokuapp.com/dropdown'

  dropdown_list = @driver.find_element(id: 'dropdown')
  options = dropdown_list.find_elements(tag_name: 'option')
  options.each { |option| option.click if option.text == 'Option 1' }

  selected_option = options.map { |option| option.text if option.selected? }.join
  expect(selected_option).to eql 'Option 1'
end
```

After visiting [the example application](http://the-internet.herokuapp.com/dropdown) we find the dropdown list by its ID and store it in a variable. We then find each clickable element in the dropdown list (e.g., each `option`) with `find_elements`.

Grabbing all of the options returns a collection that we iterate over and when the text matches what we want it will click on it.

We finish the test by performing a check to see that our selection was made correctly. This is done by reiterating over the dropdown options collection one more time. This time we're getting the text of the item that was selected, storing it in a variable, and making an assertion against it.

While this works, there is a simpler, built-in way to do this with Selenium. Let's give that a go.

## Another Example

```ruby
# filename: dropdown.rb
...
run do
  @driver.get 'http://the-internet.herokuapp.com/dropdown'

  dropdown = @driver.find_element(id: 'dropdown')
  select_list = Selenium::WebDriver::Support::Select.new(dropdown)
  select_list.select_by(:text, 'Option 1')

  selected_option = select_list.selected_options[0].text
  expect(selected_option).to eql 'Option 1'
end
```

Similar to the first example, we are finding the dropdown list by its ID. But instead of iterating over its option elements and clicking based on a conditional check, we are leveraging a built-in helper function of Selenium, [`Select`](https://seleniumhq.github.io/selenium/docs/api/rb/Selenium/WebDriver/Support/Select.html), and it's [`select_by`](https://seleniumhq.github.io/selenium/docs/api/rb/Selenium/WebDriver/Support/Select.html#select_by-instance_method) method to choose the item we want.

We then ask the `select_list` what option was selected by using the [`selected_options`](https://seleniumhq.github.io/selenium/docs/api/rb/Selenium/WebDriver/Support/Select.html#selected_options-instance_method) method. This returns an array of Selenium Elements (which in this case is an array of just one element). So we need to reference the first element by it's index (e.g., `[0]`), ask for it's text, and store it in a variable (e.g., `selected_option`).

Then we perform our assertion against this variable (just like in the previous example).

__NOTE: In addition to selecting by text, you can also select by value.__

```ruby
  select_list.select_by(:value, '1')
```

## Expected Behavior

If you save this file with either of these examples and run it (e.g., `ruby dropdown.rb` from the command-line) here is what will happen:

+ Open the browser
+ Visit the example application
+ Find the dropdown list
+ Select the requested item from the dropdown list
+ Assert that the selected option is the one you expect
+ Close the browser

## Outro

Hopefully this tip will help you breeze through selecting items from a dropdown list.

Happy Testing!
