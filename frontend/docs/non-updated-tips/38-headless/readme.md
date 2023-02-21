---
title: "How To Run Your Tests Headlessly with Xvfb"
slug: "38-headless"
number: 38
publish_date: 2015-10-14
tags:
  - "headless"
  - "xvfb"
level: 2
category: "infrastructure"
---

## The Problem

If you want to run your tests headlessly on a Continuous Integration (CI) server you'll quickly realize that you can't with an out-of-the-box setup since there is no display output for the browser to launch in.

## A Solution

In order to run your tests using a browser that's loaded on your CI Server you will need to configure your tests to launch the browser virtually (e.g., using something like Xvfb).

## An Xvfb primer

[Xvfb](http://en.wikipedia.org/wiki/Xvfb) (short for X virtual framebuffer) is an in-memory display server for UNIX-like operating system (e.g., Linux). It enables you to run graphical applications without a display (e.g., browser tests on a CI server) while also having the ability to take screenshots.

Let's take a look at an example.

## An Example

Before we can use Xvfb, we need to install it (along with the browser we want if it's not already loaded).

In Linux we need to find the relevant package names for the package manager and install them (e.g., `apt-get install xvfb firefox` for Debian based systems like Ubuntu, `yum install Xvfb firefox` for RedHat based systems, etc.).

Now let's create a simple Selenium script.

```ruby
# filename: headless.rb

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

run do
  @driver.get 'http://the-internet.herokuapp.com'
  expect(@driver.title).to eql 'The Internet'
  @driver.save_screenshot 'headless.png'
end
```

Here we are loading a page, asserting the title (to make sure we're in the right place), and grabbing a screenshot (so we can make sure our Xvfb setup is working). The screenshot will render in the directory alongside the test script.

Next we need to setup Xvfb, and we have a few options.

### Option 1

+ Start Xvfb on a specific display port and background the process
+ Tell the terminal session to use the display port
+ Run the test

```sh
Xvfb :99 &
export DISPLAY=:99
ruby headless.rb
```

__NOTE: This approach will keep Xvfb running in the background until the process is killed.__

### Option 2

+ Use `xvfb-run` to launch the tests (no display port declaration necessary)

```sh
xvfb-run ruby headless.rb
```

__NOTE: This approach will start and stop Xvfb for you.__

### Option 3

+ Install [the headless gem](https://github.com/leonid-shevtsov/headless)
+ Update the test `setup` and `teardown` to use it
+ Run the test

```ruby
# filename: headless2.rb

require 'selenium-webdriver'
require 'rspec/expectations'
require 'headless'

def setup
  @headless = Headless.new
  @headless.start
  @driver = Selenium::WebDriver.for :firefox
end

def teardown
  @driver.quit
  @headless.destroy
end

def run
  setup
  yield
  teardown
end

run do
  @driver.get 'http://the-internet.herokuapp.com'
  expect(@driver.title).to eql 'The Internet'
  @driver.save_screenshot 'headless2.png'
end
```

In `setup` we are creating an instance of the headless library and issuing a `.start` command (which starts Xvfb). In `teardown` we stop Xvfb by with the `.destroy` after closing the browser with `@driver.quit`. The only thing that changed in our `run` action is the name of the screenshot (from `headless.png` to `headless2.png`).

With the library in place, running the test (e.g., `ruby headless2.rb`) will automatically run it headlessly -- starting and stopping Xvfb for us.

## Expected Behavior

When we save either file and run it (e.g., `ruby headless.rb` or `ruby headless2.rb` from the command-line) here is what will happen:

+ Xvfb starts
+ Browser opens in a virtual framebuffer
+ Test runs and captures a screenshot from the browser
+ Browser closes
+ Xvfb terminates (unless using Option 1)

## Choosing The Best Option

The headless gem is a handy resource. But if you use it, you'll want to make its use configurable so it doesn't load every time. This will be helpful when running your tests in non-Linux environments.

If you're just looking to try out headless testing and you're unsure of how much time you want to invest, then using the Xvfb application (e.g., options 1 or 2) is a sound path since you won't need to update your test code to use it.

## Running Concurrent Builds

If you're running tests headlessly across different builds at the same time (e.g., in parallel) on your CI server, then jobs will start to break unexpectedly. This is because of a display port collision with Xvfb (e.g., two or more Xvfb sessions trying to run on the same display port at the same time).

When this happens you can issue a runtime flag when launching `xvfb-run` that will keep trying display ports until it finds a free one (e.g., `xvfb-run -a`). You can read more about it in the man page [here](http://manpages.ubuntu.com/manpages/lucid/man1/xvfb-run.1.html).

Alternatively you can use the CI build number as your Xvfb display port. This way each display port is unique. Each CI server is different, but you should have access to this value somehow. For example, this is made available through an environment variable in Jenkins.

__NOTE: Thanks to Amelia Downs and [Brian Goad](https://twitter.com/bbbco) for contributing these solutions!__

## Outro

Hopefully this tip has helped you get your tests running smoothly on your CI Server. For more information on taking screenshots with Selenium, check out [tip 16](/tips/16-take-screenshot-on-failure). And to learn how to run a different browser locally (e.g., Chrome), check out [tip 29](/tips/29-chrome-driver).

Happy Testing!
