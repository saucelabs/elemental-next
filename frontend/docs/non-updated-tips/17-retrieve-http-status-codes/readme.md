---
title: "How To Retrieve HTTP Status Codes"
slug: "17-retrieve-http-status-codes"
number: 17
publish_date: 2015-10-15
tags:
  - "test http status"
  - "retrieve http status"
  - "http status codes"
  - "proxy"
  - "proxy server"
  - "browsermob-proxy"
level: 3
category: "tools"
---

## The Problem

There are times when you are testing a page (or numerous pages) and you want to verify that it responded correctly. A great way to handle this is by checking the HTTP Status Code that the browser received. However this functionality is not available in Selenium WebDriver.

## A Solution

The tried and true approach that Selenium Committers and Practitioners recommend is to use a proxy server. With it, you will be able to watch and manipulate network traffic to and from the application you're testing. Thus giving you access to a whole host of functionality that isn't available otherwise.

Let's step through an example using [BrowserMob Proxy](http://bmp.lightbody.net/).

## An Example

First we need to download a copy of [BrowserMob Proxy](http://bmp.lightbody.net/).

Next we'll create a script and pull in our requisite libraries (e.g., `selenium-webdriver` to drive the browser, `rspec/expectations` and it's matchers for our assertion, and the [`browsermob/proxy`](https://github.com/jarib/browsermob-proxy-rb) library to control the proxy server).

```ruby
# filename: status_codes.rb

require 'selenium-webdriver'
require 'rspec/expectations'
include RSpec::Matchers
require 'browsermob/proxy'
```

Now let's create a method to prepare the proxy for use with Selenium. In it we start the proxy server, configure a browser profile to use it (for Firefox in this case), and return the profile object.

```ruby
def configure_proxy
  server = BrowserMob::Proxy::Server.new(
    File.join(Dir.pwd, 'browsermob-proxy-2.0.0/bin/browsermob-proxy'))
  @proxy = server.start.create_proxy
  profile = Selenium::WebDriver::Firefox::Profile.new
  profile.proxy = @proxy.selenium_proxy
  profile
end
```

Next we wire up some simple `setup`, `teardown`, and `run` methods to handle our test configuration.

```ruby
def setup
  @driver = Selenium::WebDriver.for :firefox, profile: configure_proxy
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

In `setup` we use the `configure_proxy` method when specifying the profile object. And we close the proxy in `teardown` (after quitting the Selenium session).

Now let's create a helper method to pull the status code out of the browser's [HTTP Archive](http://www.softwareishard.com/blog/har-12-spec/) (a.k.a. HAR) when an action is performed on the page.

```ruby
def retrieve_status_code
  @proxy.new_har
  yield
  @proxy.har.entries.first.response.status
end
```

Now we're ready to wire up our test.

```ruby
run do
  status_code = retrieve_status_code do
    @driver.get 'http://the-internet.herokuapp.com/status_codes/404'
  end

  expect(status_code).to eql 404
end
```

When visiting the page we are passing the Selenium command to the `retrieve_status_code` method which returns the HTTP response code. We store this in a `status_code` variable and use it to check that the response code is what we expect (`404`).

## Expected Behavior

If you save this file and run it (e.g., `ruby status_codes.rb` from the command-line) here is what will happen:

+ Proxy server starts
+ Proxy server session created
+ Browser opens
+ Visit the URL
+ Retrieve the HTTP Status Code from loading the page
+ Check that the status code is what was expected
+ Browser closes
+ Proxy session closes

## Troubleshooting

If you get an error when running your test, be sure to append `log: true` when creating an instance of `Browsermob::Proxy::Server`.

```ruby
  server = BrowserMob::Proxy::Server.new(
    File.join(Dir.pwd, 'browsermob-proxy-2.0.0/bin/browsermob-proxy'), log: true)
```

Now when you run your test, you will see more detailed information as to why the server was unable to start.

## Outro

This tip was inspired by [Jim Evans'](https://twitter.com/jimevansmusic) multi-part blog post series on doing the same thing in C# with Fiddler ([1](http://jimevansmusic.blogspot.com/2013/08/implementing-webdriver-http-status.html), [2](http://jimevansmusic.blogspot.com/2013/08/implementing-http-status-codes-in.html), [3](http://jimevansmusic.blogspot.com/2013/08/implementing-http-status-codes-in_17.html)) which was in response to [Selenium Issue 141](https://code.google.com/p/selenium/issues/detail?id=141). Thanks Jim!

Happy Testing!
