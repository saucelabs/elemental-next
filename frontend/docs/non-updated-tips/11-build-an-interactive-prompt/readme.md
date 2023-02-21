---
title: "Building an Interactive Prompt"
slug: "11-build-an-interactive-prompt"
number: 11
publish_date: 2013-08-06
tags:
  - "repl"
  - "debugging"
level: 2
category: "tools"
---

## The Problem

Working with Selenium straight in code gets you a lot of advantages. But when you run into a tricky scenario to automate it becomes challenging to step through it to completion.

The typical approach is to walk through the scenario manually and inspect its markup, identify the bits you want to interact with, write up the test script, run it, and watch it. If it passes, then pat yourself on the back. If it fails, make some tweaks and run it again -- repeating until it passes.

This is a real pain, and it's even more frustrating when debugging tests that fail intermittently.

## A Solution

One way to take the sting out of this, and make it easier for folks to transition from Selenium IDE, is to build an interactive prompt -- also known as a read-eval-print-loop (REPL).

Upon loading the prompt it will launch a browser and accept Selenium commands just the same as they are written in test code. And if a command is issued that errors (or that it doesn't recognize) the prompt will provide that information and continue to function.

This will enable us to step through specific Selenium actions and locators to verify that they work before putting them into test code.

## An Example

In the first half of our example we include our libraries and wire up setup, teardown, and run actions.

```ruby
require 'selenium-webdriver'
require 'rspec-expectations'

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

Here is an example command you may issue to start: `@driver.get 'http://www.elementalselenium.com'`.


## Expected Behavior

+ Firefox loads
+ An interactive prompt is presented
+ Issue a Selenium command and see it execute in the browser
+ Issue a command that it does not recognize (or that errors), and see a message stating the issue in the prompt
+ Issue __q__, the browser will close and the prompt will terminate


## Outro

We hope this REPL will help save you some time and frustration -- making it easier to write and debug your tests.

And if you'd like a more advanced way to debug your tests, check out [Tip 14 - Interactive Prompts Revisited with Pry](http://elementalselenium.com/tips/14-interactive-prompts-revisited).

Happy Testing!
