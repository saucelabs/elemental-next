---
title: "Retrying Test Actions"
slug: "10-retry-test-actions"
number: 10
publish_date: 2013-07-30
tags:
  - "reliability"
level: 2
category: "patterns"
---

## The Problem

We all write tests with the best intention of having them pass, and when they fail, to reveal legitimate issues in the application we're testing. But that's not always easy to accomplish. Especially when your application is dependent upon third-party service providers (e.g. payment providers, social networks, etc).

## A Solution

Rather than have your tests fail intermittently for reasons that don't actually reflect an issue in your application (or that are really difficult to track down), we'd like to trigger a context specific retry for a specific set of actions (rather than the whole test) that will back-off after a few attempts.

If it finds what it needs, the tests passes. If it doesn't, the test fails -- and you know you have a legitimate problem on your hands.

## An Example

The example application is a page that displays a notification message at the top of the page. It will either say __Action successful__ or __Action unsuccessful, please try again__. You can see it [here](http://the-internet.herokuapp.com/notification_message).

Our goal in this example is verify an __Action successful__ message.

The beginning of our test script starts off simply with accessing our libraries (Selenium and RSpec) and creating our setup, teardown, and run actions.

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

A first pass at this example would look something like this:

```ruby
run {
  @driver.get 'http://the-internet.herokuapp.com/notification_message'
  notification_message = @driver.find_element(id: 'flash').text
  notification_message.should =~ /Action successful/
}
```

The problem with this approach is that it will fail intermittently because the page's notification message could very well be something else. But the next time you load it, it could be the correct thing.

Perhaps something like this would be better suited:

```ruby
def get_notification_message
  @notification_message = @driver.find_element(id: 'flash').text
end

def retry_if_notification_message_contains(fail_message)
  count = 0
  yield
  until !@notification_message.include? fail_message || count == 3
    yield
    count =+ 1
  end
end

run {
  retry_if_notification_message_contains 'please try again' do
    @driver.get 'http://the-internet.herokuapp.com/notification_message'
    get_notification_message
  end
  @notification_message.should =~ /Action successful/
}
```

In this approach we have abstracted out the text grab of the notification message into a method which sets what it finds into an instance variable. And we've added a new method called `retry_if_notification_message_contains` that accepts an argument of `fail_message`. In it we accept a yield in 2 places and have constructed a simple loop that runs 3 times or until the notification message does not match the `fail_message`, whichever comes first. And the yields will execute whatever code is passed both before and during the loop.

In the run block we pass our navigation and text grab actions as a block into `retry_if_notification_message_contains`, passing the failure message of __please try again__ as the argument for `fail_message` to receive.

And we top everything off with an assertion.

## Expected Behavior

+ Load the page
+ Grab the notification message text
+ Compare it to the failure message
+ If it matches, retry
+ If 3 retries attempted, end loop, and fail test
+ If it doesn't match, pass the test

## Outro

With this approach there may be a concern that we could be obfuscating a real issue that could bubble up to our users. That's why it is important to use this approach sparingly, and on issues you more or less understand (e.g. a third-party test environment having one-off service blips, or expensive tests that involve sharing something to a third-party and checking to see that it appeared).

Hopefully this example will help you build a more resilient and relevant set of tests.

Happy Testing!
