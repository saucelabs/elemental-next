---
title: "How To Simulate Slow Connections"
slug: "64-limit-bandwidth"
number: 64
publish_date: 2015-10-16
tags:
  - "browsermob-proxy"
level: 3
category: "tools"
---

## The Problem

With Selenium you have the luxury of cross browser testing. But what happens when you also need to test how your application behaves on a _slow_ connection?

## A Solution

With the help of a proxy server like [BrowserMob Proxy](http://bmp.lightbody.net/) we can simulate bandwidth limitations and run our tests to see if they fall down. In order to do this we'll also need to adjust our Selenium's default timeout.

## A Brief Primer on BrowserMob Proxy

BrowserMob Proxy is a server which sits between your browser and the application you're testing. You connect to it by configuring a browser profile to pass through it. As listed on [the BrowserMob Proxy GitHub page](https://github.com/lightbody/browsermob-proxy#features-and-usage), here are some of the benefits it offers:

+ blacklisting and whitelisting certain URL patterns
+ simulating various bandwidth and latency
+ remapping DNS lookups
+ flushing DNS caching
+ controlling DNS and request timeouts
+ automatic BASIC authorization

__NOTE: You can also capture HTTP status codes with it as well. See [tip 17](/tips/17-retrieve-http-status-codes) for details on how to do that.__

Let's dig in with an example.

## An Example

First we'll need to download BrowserMob Proxy from [here](http://bmp.lightbody.net/).

Then we can wire up our test script to pull in our requisite libraries (e.g., `selenium-webdriver` to drive the browser, `rspec/expectations` and it's matchers for our assertion, and [`browsermob/proxy`](https://github.com/jarib/browsermob-proxy-rb) to control the proxy server).

```ruby
# filename: bandwidth_limit.rb

require 'browsermob/proxy'
require 'selenium-webdriver'
require 'rspec/expectations'
include RSpec::Matchers
```

Now let's configure the proxy server and bind it to a Selenium browser profile.

```ruby
def configure_proxy
  server = BrowserMob::Proxy::Server.new('./browsermob-proxy-2.1.0-beta-3/bin/browsermob-proxy')
  server.start
  @proxy = server.create_proxy
  profile = Selenium::WebDriver::Firefox::Profile.new
  profile.proxy = @proxy.selenium_proxy
  profile
end
```

Now we can create `setup`, `teardown`, and `run` methods to handle our test configuration.

```ruby
def setup
  @driver = Selenium::WebDriver.for :firefox, profile: configure_proxy
  @driver.manage.timeouts.page_load = 300 # seconds
  @proxy.limit(upstream_kbps: 20, downstream_kbps: 30)
end

def teardown
  @driver.quit
  @proxy.close
end

def run
  setup
  yield
  teardown
end
```

In `setup` we set the default timeout for Selenium to 5 minutes (e.g. `300` seconds) and specify an upload limit of `20` kilobits per second and a download limit of `30` kilobits per second (which is similar to a dial-up connection).

Now let's write our test. A simple page load and copy assertion will suffice (to make sure the page actually loaded).

```ruby
run do
  @driver.get 'http://the-internet.herokuapp.com'
  expect(@driver.find_element(class: 'heading').text).to eql('Welcome to the Internet')
end
```

## Expected Behavior

If you save this file and run it (e.g., `ruby bandwidth_limit.rb` from the command-line) here is what will happen:

+ Proxy server starts
+ Proxy server session created
+ Browser opens (connecting to the proxy server session with a large default timeout)
+ Proxy bandwidth constraints applied
+ Visit the page (which loads slowly)
+ Page eventually loads
+ Grab the text from the page heading
+ Perform an assertion against the text to make sure it loaded
+ Browser closes
+ Proxy session closes

## Outro

It may not be clear in [`browsermob-proxy-rb`](https://github.com/jarib/browsermob-proxy-rb) what options and functionality are available since the library is light on documentation. But the code is easy to read and has good comments. It's worth looking at [the client class](https://github.com/jarib/browsermob-proxy-rb/blob/master/lib/browsermob/proxy/client.rb) to see what's available.

Alternatively, you can BrowserMob Proxy through it's Rest API. You can find out more about that on [the BrowserMob Proxy GitHub page](https://github.com/lightbody/browsermob-proxy#rest-api).

Happy Testing!
