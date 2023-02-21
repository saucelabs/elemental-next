---
title: "How To Do Performance Testing"
slug: "49-performance-testing"
number: 49
publish_date: 2014-05-06
tags:
  - "performance testing"
  - "proxy"
  - "browsermob-proxy"
  - "yslow"
level: 3
category: "testing"
---

## The Problem

Odds are pretty good that your production application has some kind of performance monitoring in place (e.g., New Relic). This goes a long way towards identifying when something detrimental has been released into the wild.

But how do you catch performance issues before they reach production?

## A Solution

By repurposing a Selenium script, we can run it through a proxy server and capture the HTTP traffic. With this traffic, we can run some simple checks to see if the application's performance has degraded.

Let's dig in with an example.

## An Example

Before we get started we'll need to [download a copy of BrowserMob Proxy](http://bmp.lightbody.net/). Once we have that, we'll want to include our requisite libraries:

+ `selenium-webdriver` to control the browser
+ `browsermob/proxy` to configure/user BrowserMob Proxy
+ `rspec=expectations` and `RSpec::Matchers` for assertions
+ `json` to consume JSON data for the performance checks

After that, we can create methods to configure the proxy server (`configure_proxy`), set the browser profile to use the proxy server (`browser_profile`), pull these together so the test will have a working browser that uses the proxy server (`setup`), and tear things down after running the test (`teardown`).

```ruby
# filename: performance.rb

require 'selenium-webdriver'
require 'browsermob/proxy'
require 'rspec-expectations'
include RSpec::Matchers
require 'json'

def configure_proxy
  proxy_binary = BrowserMob::Proxy::Server.new('./browsermob-proxy/bin/browsermob-proxy')
  proxy_binary.start
  proxy_binary.create_proxy
end

def browser_profile
  browser_profile = Selenium::WebDriver::Firefox::Profile.new
  browser_profile.proxy = @proxy.selenium_proxy
  browser_profile
end

def setup
  @proxy = configure_proxy
  @driver = Selenium::WebDriver.for :firefox, profile: browser_profile
end

def teardown
  @driver.quit
  @proxy.close
end
```

Next we'll want to tell the proxy server to capture traffic and return a payload (a.k.a. a HTTP Archive, or HAR for short).

```ruby
def capture_traffic
  @proxy.new_har
  yield
  @proxy.har
end
```

We then tie this all together with a `run` method. It will call `setup`, execute test commands while capturing traffic (`capture_traffic`), save the HAR to a uniquely named file (which is named with a time stamp), and tear everything down when it's done (`teardown`).

```ruby
def run
  setup
  har = capture_traffic { yield }
  @har_file = "./selenium_#{Time.now.strftime("%m%d%y_%H%M%S")}.har"
  har.save_to @har_file
  teardown
end
```

Now we can put all of this to use by exercising a feature of our application with some Selenium commands.

```ruby
run do
  @driver.get 'http://the-internet.herokuapp.com/dynamic_loading/2'
  @driver.find_element(css: '#start button').click
  Selenium::WebDriver::Wait.new(timeout: 8).until do
    @driver.find_element(css: '#finish')
  end
end
```

If we run this script (e.g., `ruby performance.rb` from the command-line) then we will see the browser load, complete some actions, and close. After which, a HAR file will appear in the working directory.

This outputted file is what we'll use to perform some simple benchmark checks.

Rather than identify specific benchmarks to check, let's run through a gamut of them by leveraging a pre-existing benchmarking tool like [YSlow](https://developer.yahoo.com/yslow/). Fortunately, there is [a command-line YSlow tool](http://yslow.org/command-line-har/) that can consume a HAR file and provide us with useful output.

It's a Node.js app. So first we'll need to [install Node.js](http://nodejs.org/), and then install the app (with `npm install yslow -g`).

After that, we can run it from the command line like so:

`yslow --info basic --format plain example.har`

This will consume a HAR file and output some helpful information -- including an overall score.

```sh
size: 476.8K (476888 bytes)
overall score: A (99)
url: http://the-internet.herokuapp.com/dynamic_loading/2
# of requests: 16
ruleset: ydefault
```

This overall score is what we are interested in. To get at it, we'll need to change the format type from `plain` to `json`.

`yslow --info basic --format json example.har`

This will return a Hash that we can then easily parse through to get the value we want (e.g., the overall score with a key of `"o"`).

```sh
{"w":476887,"o":99,"u":"http%3A%2F%2Fthe-internet.herokuapp.com%2Fdynamic_loading%2F2","r":16,"i":"ydefault"}
```

Now we can automate the YSlow command-line execution and perform an assertion by adding the following to the end of our script.

```ruby
performance_results = JSON.parse `yslow --info basic --format json #{@har_file}`
performance_grade = performance_results["o"]
performance_grade.should be > 95
```

Now when we run this if the overall score drops below a 95 out of 100 then the test will fail.

From here we can wire this up to a Continuous Integration server and run it headlessly (either with [Xvfb](http://elementalselenium.com/tips/38-headless) or [GhostDriver](http://elementalselenium.com/tips/46-headless-ghostdriver)) to perform these checks in an ongoing basis.

## Expected Behavior

+ Load the browser
+ Capture all requests through the proxy server
+ Save the captured requests to a HTTP Archive (HAR) file on disk
+ Run the HAR file through YSlow to get a numeric grade
+ Assert that the grade is above a certain level

## Outro

You can see the full code example [here](https://gist.github.com/tourdedave/bc4b75fd6cdc1eef7860).

For more insights into what HAR is and the many uses of it, check out [this write-up and video from Ilya Grigorik's blog](http://www.igvita.com/2012/08/28/web-performance-power-tool-http-archive-har/). You can also [check out the HAR spec](http://www.softwareishard.com/blog/har-12-spec/). And there's also [a great presentation from David Burns and David Henderson at GTAC 2009](https://www.youtube.com/watch?v=qQgDDAan4rM) on using Selenium to do performance benchmarking.

Happy Testing!
