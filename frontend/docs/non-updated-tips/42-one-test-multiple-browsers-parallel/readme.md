---
title: "How To Run A Test On Multiple Browsers, In Parallel"
slug: "42-one-test-multiple-browsers-parallel"
number: 42
publish_date: 2014-03-18
tags:
  - "parallelization"
  - "multiple browsers"
  - "cloud"
  - "sauce"
level: 2
category: "infrastructure"
---

## The Problem

In [the last tip](http://elementalselenium.com/tips/41-one-test-multiple-browsers) I covered how to run a single test against multiple browsers. While this could come in handy, it is still a bit lacking.

Right now, the test is only being run one at a time (a.k.a. in series) for each browser in our list. If this were a longer running test and/or if there were more browsers we cared about, then this could quickly stack up to longer test run times.

## A Solution

Let's remedy this by taking [the previous tip's example](http://elementalselenium.com/tips/41-one-test-multiple-browsers) and parallelizing it with the help of [threads](http://www.tutorialspoint.com/ruby/ruby_multithreading.htm).

## An Example

Our initial setup stays mostly the same. There are only a couple of minor changes we'll need to make.

```ruby
ENV['SAUCE_USERNAME'] = 'your username'
ENV['SAUCE_API_KEY']  = 'your api key'

require 'selenium-webdriver'
require 'rspec-expectations'

def setup(browser_name, browser_version)
  caps = Selenium::WebDriver::Remote::Capabilities.send(browser_name.to_sym)
  caps.platform = 'Windows XP'
  caps.version = browser_version.to_s

  Thread.current[:driver] = Selenium::WebDriver.for(
    :remote,
    url: "http://#{ENV['SAUCE_USERNAME']}:#{ENV['SAUCE_API_KEY']}@ondemand.saucelabs.com:80/wd/hub",
    desired_capabilities: caps)
end

def teardown
  Thread.current[:driver].quit
end
```

Since we are working with threads, we will need to use variables that are thread safe. The best candidates are thread local variables. They have a global scope (similar to global variables) but are only accessible from within the thread that created it. This way we won't run into any odd collisions across simultaneous test runs.

So instead of instance variables (e.g., `@driver`) we are now storing each instance of Selenium in this new kind of variable and referencing it as needed (e.g., `Thread.current[:driver]`).

```ruby
# filename: example42.rb

BROWSERS = { firefox: '27',
             chrome: '32',
             internet_explorer: '8' }

def run
  threads = []
  BROWSERS.each_pair do |browser, browser_version|
    threads << Thread.new do
      setup(browser, browser_version)
      yield
      teardown
    end
  end
  threads.each { |thread| thread.join }
end
```

Our browser list remains untouched, but our `run` method has been updated to spawn and join threads (which is how you finish a thread). With this setup a new thread will be spawned for each of the browsers in the list, perform its actions, and finish.

Will all of that in place, we just need to update our test to use the new thread local driver variable.

```ruby
run do
  Thread.current[:driver].get 'http://the-internet.herokuapp.com'
  Thread.current[:driver].title.should == 'The Internet'
end
```

If we run this script from the command line (`ruby examle42.rb`) and head over [the Sauce Labs Account page](https://saucelabs.com/account), then we should see three tests running simultaneously.

NOTE: the number of parallel sessions alotted to your Sauce Labs account will dictate how quickly your tests will finish. For instance, if you add two new browsers to `BROWSER_LIST` and run this, only 3 sessions will run in Sauce Labs, queuing the other two until some of the original sessions finish.

## Expected Behavior

+ Simultaneously loads each browser in a Sauce Labs job
+ Each test loads the page and asserts the title is correct
+ Each session closes when it is complete

## Outro

There are alternative ways to run your tests in parallel. Some more notable approaches include:

+ through a test framework (e.g., TestNG in Java)
+ through Continuous Integration
+ through a third-party library (e.g., [parallel_tests in Ruby](https://github.com/grosser/parallel_tests)).

For a full write-up on how to parallel_tests, check out [tip 27](http://elementalselenium.com/tips/27-parallel).

Happy Testing!
