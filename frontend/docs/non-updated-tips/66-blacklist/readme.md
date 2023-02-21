---
title: "How To Remove Third-party Resources"
slug: "66-blacklist"
number: 66
publish_date: 2015-10-20
tags:
  - "browsermob-proxy"
  - "proxy"
level: 3
category: "tools"
---

## The Problem

There are plenty of external resources that get loaded onto a page that aren't directly relevant to the functionality you're testing (e.g., Facebook widgets, Analytics, JavaScript snippets, etc.). And these external resources have the potential to negatively impact your test runs due to slow load times.

So how do you protect your tests from these things that are outside of your control?

## A Solution

By leveraging a proxy server in our tests we can block the external resources we don't want to load by adding them to a blacklist.

Let's dig in with an example.

## An Example

__NOTE: For a brief primer on proxy servers check out [tip 64](/tips/64-limit-bandwidth).__

To get started we'll need to download a copy of Browsermob Proxy ([link](http://bmp.lightbody.net/)) and write our script. In it we'll pull in our requisite libraries (e.g., `browsermob/proxy` to control the proxy server, `selenium-webdriver` to drive the browser, and `rspec/expectations` and it's matchers to perform assertions).

After that, we'll configure the proxy server and wire up some simple `setup`, `teardown`, and `run` methods. As part of `setup` we'll want to configure the blacklist. To do that we'll add a regular expression to find the resource we want to block and the status code we'd like the resource to be changed to (e.g., blocking a resource from loading with a `200` response code and having it return a `404` instead).

```ruby
# filename: blacklist.rb

require 'browsermob/proxy'
require 'selenium-webdriver'
require 'rspec/expectations'
include RSpec::Matchers

def configure_proxy
  server = BrowserMob::Proxy::Server.new('./browsermob-proxy-2.0-beta-9/bin/browsermob-proxy')
  server.start
  @proxy = server.create_proxy
  profile = Selenium::WebDriver::Firefox::Profile.new
  profile.proxy = @proxy.selenium_proxy
  return profile
end

def setup
  @driver = Selenium::WebDriver.for :firefox, profile: configure_proxy
  @proxy.blacklist('http:\/\/the-internet.herokuapp.com\/slow_external', 404)
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

Now we're ready to wire up our test. Let's use an example from [the-internet](https://github.com/tourdedave/the-internet) that has a slow loading resource. It has a rogue `GET` request that takes 30 seconds to load. You can see it [here](http://the-internet.herokuapp.com/slow).

```ruby
run do
  @proxy.new_har
  @driver.get 'http://the-internet.herokuapp.com/slow'
  entry = @proxy.har.entries.find { |e| e.request.url.include? 'slow_external' }
  expect(entry).not_to be_nil
  expect(entry.response.status).to eq(404)
end
```

We start the test by creating a new HTTP Archive (HAR) for tracking the page requests. We then load the example page, find the entry for the slow loading resource from the HAR, and assert that the response code for it is `404`.

## Expected Behavior

If you save this file and run it (e.g., `ruby blacklist.rb` from the command-line) here is what will happen:

+ Proxy server starts
+ Proxy server session created
+ Browser opens
+ Visit the page
+ Find the entry we want from the HTTP Archive
+ Check that the HTTP status code for the entry has the correct status code from the blacklist
+ Browser closes
+ Proxy session closes

## Outro

Happy Testing!
