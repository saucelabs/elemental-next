---
title: "Implicit vs Explicit Waits"
slug: "47-waiting"
number: 47
publish_date: 2015-10-13
tags:
  - "waiting"
  - "dynamic pages"
  - "explicit waits"
  - "implicit waits"
level: 2
category: "testing"
---

## The Problem

In order to make our Selenium tests resilient, we need to make them wait for certain elements to load. Elements that we want to interact with. This is especially true with JavaScript heavy pages. And the standard advice from the Selenium Core Committers is to use explicit waits (see [tip 23](/tips/23-dynamic-pages) for a walk-through of explicit waits).

This is in lieu of an implicit wait (e.g., setting a default amount of time for Selenium to wait if it can't perform an action immediately) and/or static sleeps. Avoiding static sleeps should be obvious (e.g., don't force your tests to wait a _hard-coded_ amount of time to perform an action -- it's bad news) but what about an implicit wait? Is there still value in using it? Or is it just old news that is likely to be deprecated in a future version of Selenium? And what about using them together?

## A Solution

The short answer? Use explicit waits.

Adding an implicit wait to your Selenium tests is simple enough and may seem intuitive. But there are cases where it simply doesn't help you like you think it will. And while you can combine explicit and implicit waits together (e.g., override an implicit wait with an explicit wait to make a Selenium action wait longer) -- you shouldn't. More on that later.

Let's dig in with some examples.

## An Example

Let's step through some examples that deal with [dynamically loaded content](http://the-internet.herokuapp.com/dynamic_loading) available on [the-internet](https://github.com/tourdedave/the-internet). There are two examples, each is constructed slightly differently, but they have the same behavior (e.g., when you click the button on the page a loading bar appears for 5 seconds then disappears and displays some text).

First let's pull in our dependent libraries (e.g., `selenium-webdriver` to drive the browser, and `rspec/expectations` and `RSpec::Matchers` for our assertions) and wire up some simple methods (e.g., `setup`, `teardown`, and `run`) to handle our test configuration.

```ruby
# filename: waiting.rb

require 'selenium-webdriver'
require 'rspec/expectations'
include RSpec::Matchers

def setup
  @driver = Selenium::WebDriver.for :firefox
  @driver.manage.timeouts.implicit_wait = 3
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

Notice that in `setup` we are specifying an implicit wait of `3` seconds. This tells Selenium to retry each `find_element` action for up to 3 seconds. If it can complete the action in that amount of time, it will proceed onto the next command. Otherwise it will raise a timeout exception.

Now let's add our first test.

```ruby
run do
  @driver.get 'http://the-internet.herokuapp.com/dynamic_loading/1'
  @driver.find_element(css: '#start button').click
  @driver.find_element(css: '#finish').displayed?
  expect(@driver.find_element(css: '#finish').text).to eql('Hello World!')
end
```

In this example the element we're interested in is already on the page, just hidden. When we execute this (e.g., `ruby waiting.rb` from the command-line) the `.displayed?` step runs but it doesn't trigger the implicit wait. Instead, the test proceeds directly to the assertion looking for text that's not there and failing.

Let's run the same test against the other dynamic loading example.

```ruby
run do
  @driver.get 'http://the-internet.herokuapp.com/dynamic_loading/2'
  @driver.find_element(css: '#start button').click
  @driver.find_element(css: '#finish').displayed?
  expect(@driver.find_element(css: '#finish').text).to eql('Hello World!')
end
```

In this example the element we're interested in gets rendered _after_ the loading bar. When we run this (e.g., `ruby waiting.rb` from the command-line) the `.displayed?` step will wait as we intend, but the assertion will still fail. That's because the implicit wait is not long enough (because the loading bar takes 5 seconds to complete, but the implicit wait is set at `3` seconds).

Now we're at a cross-roads. Do we increase the implicit wait to account for this? That would be a simple enough fix for this example. But that's a bad option since it would impact _all_ of the tests that use this setup. Instead, we can use an explicit wait.

```ruby
def wait_for(seconds)
  Selenium::WebDriver::Wait.new(timeout: seconds).until { yield }
end

run do
  @driver.get 'http://the-internet.herokuapp.com/dynamic_loading/2'
  @driver.find_element(css: '#start button').click
  wait_for(10) { @driver.find_element(css: '#finish').displayed? }
  expect(@driver.find_element(css: '#finish').text).to eql('Hello World!')
end
```

If we wrap our `.displayed?` action in an explicit wait we are able to override the implicit wait and wait for up 10 seconds. Now when we run our test, our test will pass. And if we revisit our first example and do the same, then it will pass too.

```ruby
run do
  @driver.get 'http://the-internet.herokuapp.com/dynamic_loading/1'
  @driver.find_element(css: '#start button').click
  wait_for(10) { @driver.find_element(css: '#finish').displayed? }
  expect(@driver.find_element(css: '#finish').text).to eql('Hello World!')
end
```

## On Not Mixing Explicit and Implicit Waits

If your test suite uses both explicit and implicit waits, then you're in for some pain (e.g., transient failures as you scale your test suite). For more details about this, check out [this StackOverflow answer](http://stackoverflow.com/questions/15164742/combining-implicit-wait-and-explicit-wait-together-results-in-unexpected-wait-ti#answer-15174978) from [Jim Evans](https://twitter.com/jimevansmusic) (a member of the Selenium core team).

The best thing is to only use explicit waits. We already have them in place, so we can go ahead and simply remove the implicit wait from our `setup` method.

```ruby
def setup
  @driver = Selenium::WebDriver.for :firefox
end
```

## Expected Behavior

If we save the file and run it (e.g., `ruby waiting.rb` from the command-line) here is what will happen:

+ Open the browser
+ Visit the page
+ Click the Start button
+ Wait for the progress bar to disappear and finish text to appear
+ Assert that the finish text appears on the page
+ Close the browser

## Outro

While an implicit wait can be useful, providing you an initial blanket of cover, it's not ideal for every circumstance. Instead explicit waits are a better tool for the job since they provide more resilient and predictable results (even if they make your test code more verbose).

Regardless of the approach you choose, be sure never to mix implicit and explicit waits together.

Happy Testing!
