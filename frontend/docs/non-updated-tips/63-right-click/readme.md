---
title: "How To Right-click"
slug: "63-right-click"
number: 63
publish_date: 2015-10-13
tags:
  - "right-click"
  - "right click"
  - "context menu"
  - "action builder"
  - "context click"
level: 2
category: "testing"
---

## The Problem

Sometimes you'll run into an app that has functionality hidden behind a right-click menu (a.k.a. a context menu). These menus tend to be system level menus that are untouchable by Selenium. So how do you test this functionality?

## A Solution

By leveraging [Selenium's Action Builder](https://github.com/SeleniumHQ/selenium/blob/master/rb/lib/selenium/webdriver/common/action_builder.rb) we can issue a right-click command (a.k.a. a [`context_click`](https://github.com/SeleniumHQ/selenium/blob/master/rb/lib/selenium/webdriver/common/action_builder.rb#L301)).

We can then select an option from the menu by traversing it with keyboard arrow keys (which we can issue with the Action Builder's [`send_keys`](https://github.com/SeleniumHQ/selenium/blob/master/rb/lib/selenium/webdriver/common/action_builder.rb#L140) command). For a full write-up on working with keyboard keys in Selenium, see [tip 61](/tips/61-keyboard-keys).

Let's dig in with an example.

## An Example

Let's start by pulling in the necessary libraries (`selenium-webdriver` to control the browser and `rspec/expectations` & `RSpec::Matchers` to perform an assertion) and wiring up some simple `setup`, `teardown`, and `run` methods.

```ruby
# filename: right_click.rb

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

Now we're ready to write our test.

Let's use an example from [the-internet](https://github.com/tourdedave/the-internet) that will render a custom context menu when we right-click on a specific area of the page ([link](http://the-internet.herokuapp.com/context_menu)). Clicking the context menu will trigger a JavaScript alert which will say `You selected a context menu`. We'll grab this text and use it to assert that the menu was actually triggered.

```ruby
run do
  @driver.get 'http://the-internet.herokuapp.com/context_menu'
  menu_area = @driver.find_element id: 'hot-spot'
  @driver.action.context_click(menu_area).send_keys(
    :arrow_down).send_keys(
    :arrow_down).send_keys(
    :arrow_down).send_keys(
    :enter).perform
  alert = @driver.switch_to.alert
  expect(alert.text).to eq('You selected a context menu')
end
```

## Expected Behavior

If we save this file and run it (e.g., `ruby right_click.rb`) from the command-line) here is what will happen:

+ Open the browser and visit the page
+ Find and right-click the area which will render a custom context menu
+ Select the context menu option with keyboard keys
+ JavaScript alert appears
+ Grab the text of the JavaScript alert
+ Assert that the text from the alert is what we expect

## Outro

To learn more about context menus, you can read [this write-up from the Tree House blog](http://blog.teamtreehouse.com/building-html5-context-menus). And for more thorough examples on working with keyboard keys and JavaScript alerts in your Selenium tests, check out tips [61](/tips/61-keyboard-keys) and [51](/tips/51-javascript-alerts).

Happy Testing!
