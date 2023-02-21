---
title: "How To Test For Broken Images"
slug: "67-broken-images"
number: 67
publish_date: 2015-10-20
tags:
  - "broken image"
  - "broken images"
  - "proxy"
  - "browsermob-proxy"
  - "http library"
  - "javascript"
level: 3
category: "testing"
---

## The Problem

Selenium is built to mimic human action (e.g., clicking, typing, dragging, dropping, etc.). So how do you use it to test for broken images?

## A Solution

Out of the box, Selenium is not equipped to handle this. But regardless, there are several ways to accomplish this.

We can use...

+ a proxy server
+ an HTTP library
+ JavaScript

Lets look at an example of each.

## A Proxy Example

In this example we'll use Browsermob Proxy. For a primer on what this is and how to use it see [tip 64](/tips/64-limit-bandwidth).

```ruby
# filename: broken_image_1.rb

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

run do
  @proxy.new_har

  @driver.get 'http://the-internet.herokuapp.com/broken_images'

  all_images = @driver.find_elements(tag_name: 'img')

  broken_images = []
  all_images.each do |img|
    broken_images << @proxy.har.entries.find do |entry|
      entry.request.url == img.attribute('src') && entry.response.status == 404
    end
  end

  expect(broken_images).to be_empty
end
```

If you save this file and run it (e.g., `ruby broken_image_1.rb`) here is what will happen:

+ Proxy server starts
+ Proxy server session created
+ Browser opens
+ Visit the page
+ Iterate through each image in the HTTP Archive and see if it has a `404` status code
+ Store each broken image in a collection
+ Check that the broken images collection is empty

## An HTTP Library Example

For this example, we'll use a simple HTTP library called [`rest-client`](https://github.com/rest-client/rest-client).

```ruby
# filename: broken_image_2.rb

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
  require 'rest-client'

  @driver.get 'http://the-internet.herokuapp.com/broken_images'

  all_images = @driver.find_elements(tag_name: 'img')

  all_images.each do |img|
    RestClient.get img.attribute('src') do |response, request, result|
      expect(response.code).to eq 200
    end
  end

end
```

If you save this file and run it (e.g., `ruby broken_images_2.rb` from the command-line) here is what will happen:

+ Open the browser
+ Find all images on the page
+ Iterate through each image
+ Perform a `GET` request on the image and grab it's response status code
+ Assert that the status code is `200`
+ Close the browser

By using an HTTP library we get the same outcome as we saw with a proxy server. There are additional requests being made but it's substantially faster since it has less overhead.

## A JavaScript Example

```ruby
# filename: broken_image_3.rb

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
  @driver.get 'http://the-internet.herokuapp.com/broken_images'

  all_images = @driver.find_elements tag_name: 'img'

  broken_images = all_images.reject do |image|
    @driver.execute_script(
      "return arguments[0].complete && \
        typeof arguments[0].naturalWidth != \"undefined\" && \
        arguments[0].naturalWidth > 0",
      image)
  end

  expect(broken_images).to be_empty
end
```

If you save this file and run it (e.g., `broken_image_3.rb` from the command-line) here is what will happen:

+ Open the browser
+ Find all images on the page
+ Iterate through each image and inspect that it finished loading and has a defined width
+ Store images that fail inspection in a collection
+ Assert that the collection is empty

This is the leanest approach since it requires no additional setup or extra requests. It's just a matter of executing some JavaScript code to inspect the images.

## Outro

Your circumstance may vary, so choose the approach that works best for you and your team.

A big thanks to [Brian Goad](https://twitter.com/bbbco) for the JavaScript solution and pointing me towards [the StackOverflow post where he first came across this](http://stackoverflow.com/questions/16784534/find-broken-images-in-page-image-replace-by-another-image/).

Happy Testing!
