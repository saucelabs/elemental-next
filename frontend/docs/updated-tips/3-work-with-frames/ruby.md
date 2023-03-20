---
title: 'Ruby'
id: '3-work-with-frames-ruby'
slug: ruby/
number: 3
publish_date: 2023-02-21
last_update: 
  date: 2023-02-22
tags:
  - 'frames'
level: 1
category: 
  - fundamentals
language: ruby
---

# How To Work with Frames

## Intro

In this tip, you'll learn how to work with frames and write tests against them.

## Use Case

On occasion, we may encounter relics of the front-end world, such as frames. When writing tests against them, it's easy to make a mistake if we're not paying attention.

## A Solution

Rather than getting frustrated when authoring your tests, you can work with the elements in a frame by telling Selenium to switch to that frame first. Then the rest of your test should be more straightforward.

Let's explore further with some examples.

## Example 1

We'll first need to pull in our requisite libraries (`selenium-webdriver` to drive the browser, and `rspec/expecations` & `RSpec::Matchers` to perform our assertions) and wire up some simple `setup`, `teardown`, and `run` methods.

```ruby
# filename: frames.rb

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

Now onto our test. In it, we'll step through [an example of nested frames](http://the-internet.herokuapp.com/nested_frames) which can be found on [the-internet](https://github.com/tourdedave/the-internet).

==**`!! ATTEMPTED TO VALIDATE; DID NOT RUN !! --> code snippet needs validation`**==

```ruby
run do
  @driver.get 'http://the-internet.herokuapp.com/nested_frames'
  @driver.switch_to.frame('frame-top')
  @driver.switch_to.frame('frame-middle')
  expect(@driver.find_element(id: 'content').text).to eql 'MIDDLE'
end
```

With Selenium's [`.switch_to.frame`](https://seleniumhq.github.io/selenium/docs/api/rb/Selenium/WebDriver/TargetLocator.html#frame-instance_method) method we can simply switch to the frame we want. It accepts either an ID or name attribute, but in order to get the text of the middle frame (e.g., a frame nested within another frame), we need to switch to the parent frame (e.g., the top frame) and then switch to the child frame (e.g., the middle frame).

Once we've done that we're able to find the element we need, grab it's text, and assert that it's what we expect.

While this example helps illustrate the point of frame switching, it's not very practical.

## Example 2

Here is a more likely example you'll run into -- working with a WYSIWYG (What You See Is What You Get) Editor like [TinyMCE](http://www.tinymce.com/). You can see the page we're testing [here](http://the-internet.herokuapp.com/tinymce).

```ruby
# filename: frames.rb

run do
  @driver.get 'http://the-internet.herokuapp.com/tinymce'
  @driver.switch_to.frame('mce_0_ifr')
  editor = @driver.find_element(id: 'tinymce')
  before_text = editor.text
  editor.clear
  editor.send_keys 'Hello World!'
  after_text = editor.text
  expect(after_text).not_to eql before_text
end
```

Once the page loads we switch into the frame that contains TinyMCE and...

+ grab the original text and store it
+ clear and input new text
+ grab the new text value
+ assert that the original and new texts are not the same

Keep in mind that if we need to access a part of the page outside of the frame we are currently in we'll need to switch to it. Thankfully Selenium has a method that enables us to quickly jump back to the top level of the page -- [`switch_to.default_content`](https://seleniumhq.github.io/selenium/docs/api/rb/Selenium/WebDriver/TargetLocator.html#default_content-instance_method).

Here is what that looks like in practice

```ruby
  @driver.switch_to.default_content
  expect(@driver.find_element(css: 'h3').text).not_to be_empty
```

## Expected Behavior

If we save the file and run it (e.g., `ruby frames.rb` from the command-line) here is what will happen:

<u>Example 1</u>

+ Open the browser
+ Visit the page
+ Switch to the nested frame
+ Grab the text from the frame and assert that Selenium is in the correct place
+ Close the browser

<u>Example 2</u>

+ Open the browser
+ Visit the page
+ Switch to the frame that contains the TinyMCE editor
+ Grab and clear the text in the editor
+ Input and grab new text in the edtitor
+ Assert that the original and new text entries don't match
+ Switch to the top level of the page
+ Grab the text from the top of the page and assert that it's not empty
+ Close the browser

## Summary

Now you can readily defeat frames when they cross your path.

Happy Testing!

## About The Author

Dave Haeffner is the original writer of Elemental Selenium -- a free, once weekly Selenium tip newsletter that's read by thousands of testing professionals. He also created and maintains the-internet (an open-source web app that's perfect for writing automated tests against).

Dave has helped numerous companies successfully implement automated acceptance testing; including The Motley Fool, ManTech International, Sittercity, and Animoto. He is also an active member of the Selenium project and has spoken at numerous conferences and meetups around the world about automated acceptance testing.
