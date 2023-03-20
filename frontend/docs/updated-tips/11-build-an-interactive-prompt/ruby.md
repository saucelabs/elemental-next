---
title: 'Ruby'
id: '11-build-an-interactive-prompt-ruby'
slug: ruby/
number: 11
publish_date: 2013-08-06
last_update:
  date: 2023-02-28
tags:
  - 'repl'
  - 'debugging'
level: 2
category: 
  - troubleshooting
language: ruby
---

# Building an Interactive Prompt

## Intro

Working with Selenium straight in code has its advantages. However, if you run into a complicated scenario to automate, it becomes challenging to work through it to completion.

## Use Case

The typical approach is to walk through the scenario manually and inspect its markup, identify the parts you want to interact with, write up the test script, run it, and watch it. If it passes, then pat yourself on the back. If it fails, make some tweaks and run it again -- repeating until it passes.

This is a real pain, and it's even more frustrating when debugging tests that fail intermittently.

## A Solution

One way to simplify things, and make it easier for testers to transition from Selenium IDE, is to build an interactive prompt -- also known as a read-eval-print-loop (REPL).

Upon loading the prompt it will launch a browser and accept Selenium commands just the same as they are written in test code. And if a command is issued that errors (or that it doesn't recognize) the prompt will provide that information and continue to function.

This will enable us to continue through specific Selenium actions and locators to verify that they work before putting them into test code.

## Example

In the first half of our example we include our libraries and our usual setup, teardown, and run actions.

```ruby
require 'selenium-webdriver'
require 'rspec/expectations'

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

In the run action we define our loop and its behavior, creating the interactive prompt we want.

```ruby
run do
  loop do
    print '>> '
    input = gets.chomp
    if input == 'q'
      puts 'Quitting...'
      @driver.quit
      exit 0
    end
    begin
      eval input
    rescue Exception => e
      puts e.message
    end
  end
end
```

The `print` command is used instead of `puts` because we want `>> ` to appear on the same line as the input that we are issuing. This gives us the look and feel of a prompt. And we use `gets.chomp` to take in input. `gets` is responsible for receiving the input. And `chomp` removes the carriage return character (e.g. '\n') from the input.

Before executing the input we perform a check to see if the letter __q__ is issued. If so, the script will post a message to the terminal, close the browser, and exit the prompt.

We then execute the input provided with `eval` and rescue exceptions, posting their message to the terminal when they occur.

Here is an example command you may issue to start: `@driver.get 'https://www.google.com'`.


## Expected Behavior

+ Firefox loads
+ An interactive prompt is presented
+ Issue a Selenium command and see it execute in the browser
+ Issue a command that it does not recognize (or that errors), and see a message stating the issue in the prompt
+ Issue __q__, the browser will close and the prompt will terminate

## Summary

Hopefully this REPL will help save you some time and frustration -- making it easier to write and debug your tests.

## About The Author

Dave Haeffner is the original writer of Elemental Selenium -- a free, once weekly Selenium tip newsletter that's read by thousands of testing professionals. He also created and maintains the-internet (an open-source web app that's perfect for writing automated tests against).

Dave has helped numerous companies successfully implement automated acceptance testing; including The Motley Fool, ManTech International, Sittercity, and Animoto. He is also an active member of the Selenium project and has spoken at numerous conferences and meetups around the world about automated acceptance testing.
