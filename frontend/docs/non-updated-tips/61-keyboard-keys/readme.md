---
title: "How To Press Keyboard Keys"
slug: "61-keyboard-keys"
number: 61
publish_date: 2015-10-12
tags:
  - "keyboard"
  - "keys"
  - "key presses"
  - "tab"
  - "enter"
level: 1
category: "testing"
---

## The Problem

On occasion you'll come across functionality that requires the use of keyboard key presses in your tests.

Perhaps you'll need to tab to traverse from one portion of the page to another, back out of some kind of menu or overlay with the escape key, or even submit a form with Enter.

But how do you do it and where do you start?

## A Solution

You can easily issue a key press by using the `send_keys` command.

This can be done to a specific element, or generically with Selenium's Action Builder (which has been documented on [the Selenium project's Wiki page for Advanced User Interactions](https://github.com/SeleniumHQ/selenium/wiki/Advanced-User-Interactions)). Either approach will send a key press. The latter will send it to the element that's currently in focus in the browser (so you don't have to specify a locator along with it), whereas the prior approach will send the key press directly to the element found.

When sending keys be sure to specify the key-press as a symbol (e.g. space is `:space`, tab is `:tab`, etc.). You can see a full list of keyboard key symbols [here](https://github.com/SeleniumHQ/selenium/blob/master/rb/lib/selenium/webdriver/common/keys.rb).

Let's step through a couple of examples.

## An Example

First we'll set up our requisite libraries to drive the browser (e.g., `selenium-webdriver`) and perform an assertion (e.g., `rspec/expections` and `RSpec::Matchers`). After that, we'll create some simple `setup`, `teardown`, and `run` methods.

```ruby
# filename: key_presses.rb

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

Now we can wire up our test.

Let's use an example from [the-internet](https://github.com/tourdedave/the-internet) that will display what key has been pressed ([link](http://the-internet.herokuapp.com/key_presses)). We'll use the result text that gets displayed to perform our assertion.

```ruby
run do
  @driver.get 'http://the-internet.herokuapp.com/key_presses'
  @driver.find_element(class: 'example').send_keys :space
  expect(@driver.find_element(id: 'result').text).to eql('You entered: SPACE')
end
```

After visiting the page we find an element that's visible (e.g., the one that contains the example on the page) and send the space key to it (e.g., `.send_keys :space`). Then we grab the resulting text (e.g., `@driver.find_element(id: 'result').text)`) and assert that it says what we expect (e.g., `'You entered: SPACE'`).

Alternatively, we can also issue a key press without finding the element first.

```ruby
run do
  # ...
  @driver.action.send_keys(:tab).perform
  expect(@driver.find_element(id: 'result').text).to eql('You entered: TAB')
end
```

## Expected Behavior

If we save this and run it (e.g. `ruby key_presses.rb` from the command-line) here is what will happen:

+ Open the browser
+ Visit the page
+ Find the element and send the space key to it
+ Find the result text on the page and check to that it's what we expect
+ Send the tab key to the element that's currently in focus
+ Find the result text on the page and check to that it's what we expect
+ Close the browser

## Outro

If you have a specific element that you want to issue key presses to, then finding the element first is the way to go. But if you don't have a receiving element, or you need to string together multiple key presses, then the action builder is what you should reach for.

Happy Testing!
