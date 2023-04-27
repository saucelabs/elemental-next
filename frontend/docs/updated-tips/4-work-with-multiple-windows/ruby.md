---
title:'4: Work With Multiple Windows'
id: '4-work-with-multiple-windows-ruby'
sidebar_label: Ruby 
text: 'This tip will explain how to work with multiple windows in Selenium and switch between them. Occasionally you'll run into a link or action in the application you're testing that will open a new window.'
number: 4
publish_date: 2015-08-21
last_update:
  date: 2023-02-27
tags:
  - 'windows'
  - 'multiple windows'
  - 'new window'
level: 2
category:
  - 'fundamentals'
language: ruby
---

# How to Work with Multiple Windows

## Intro

This tip will explain how to work with multiple windows in Selenium and switch between them.

Occasionally you'll run into a link or action in the application you're testing that will open a new window. In order to work with both the new and originating windows you'll need to switch between them.

On the face of it, this is a pretty straightforward concept. But there may be a small challenge to watch out for that you may find in some browsers and not others.

Let's step through a couple of examples to demonstrate.

## Example 1

First, let's pull in our requisite libraries (e.g., `selenium-webdriver` to control the browser and `rspec/expectations` & `RSpec::Matchers` for our assertions) and add some simple `setup`, `teardown`, and `run` methods.

```ruby
# filename: new_window.rb

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

Now let's write a test that exercises new window functionality from an application. In this case, we'll be using [the new window example](http://the-internet.herokuapp.com/windows) found on [the-internet](https://github.com/tourdedave/the-internet).

```ruby
# filename: new_window.rb

# ...

run do
  @driver.get 'http://the-internet.herokuapp.com/windows'
  @driver.find_element(css: '.example a').click
  @driver.switch_to.window(@driver.window_handles.first)
  expect(@driver.title).not_to eql 'New Window'
  @driver.switch_to.window(@driver.window_handles.last)
  expect(@driver.title).to eql 'New Window'
end
```

After loading the page we click the link which spawns a new window. We then grab the window handles (a.k.a. unique identifier strings which represent each open browser window) and switch between them based on their order (assuming that the first one is the originating window, and that the last one is the new window). We round this test out by performing a simple check against the title of the page to make sure Selenium is focused on the correct window.

While this may seem like a good approach, it can present problems later. That's because the order of the window handles is not consistent across all browsers. Some return in the order opened, others alphabetically.

## Example 2

Here's a more resilient approach. One that will work across all browsers.

```ruby
# filename: new_window.rb

run do
  @driver.get 'http://the-internet.herokuapp.com/windows'

  first_window = @driver.window_handle
  @driver.find_element(css: '.example a').click
  all_windows = @driver.window_handles
  new_window = all_windows.select { |this_window| this_window != first_window }

  @driver.switch_to.window(first_window)
  expect(@driver.title).not_to eql 'New Window'

  @driver.switch_to.window(new_window)
  expect(@driver.title).to eql 'New Window'
end
```

After loading the page we store the window handle in a variable (e.g., `first_window`) and then proceed with clicking the new window link.

Now that we have two windows open we grab all of the window handles and search through them to find the new window handle (e.g., the handle that doesn't match the first one we've already stored). We store the result in another variable (e.g., `second_window`) and then switch between the windows. Each time checking the page title to make sure the correct window is in focus.

## Expected Behavior

+ Open the browser
+ Visit the page
+ Find the window handle for the current window
+ Click a link that opens a new window
+ Find the window handle out of all available window handles
+ Switch between the windows
+ Assert that the correct window is in focus
+ Close the browser

## Summary

I hope this was a helpful guide on how to work with and switch between multiple windows using Selenium.

Thanks to [Jim Evans](https://twitter.com/jimevansmusic) for providing the info for this tip.

For more information about switching windows (and tabs) visit the official Selenium HQ [documentation page] (https://www.selenium.dev/documentation/webdriver/interactions/windows/).

Happy Testing!

## About The Author

Dave Haeffner is the original writer of Elemental Selenium -- a free, once weekly Selenium tip newsletter that's read by thousands of testing professionals. He also created and maintains the-internet (an open-source web app that's perfect for writing automated tests against).

Dave has helped numerous companies successfully implement automated acceptance testing; including The Motley Fool, ManTech International, Sittercity, and Animoto. He is also an active member of the Selenium project and has spoken at numerous conferences and meetups around the world about automated acceptance testing.
