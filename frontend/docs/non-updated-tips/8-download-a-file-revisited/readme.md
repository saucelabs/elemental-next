---
title: "How To Download a File Without a Browser"
slug: "8-download-a-file-revisited"
number: 8
publish_date: 2015-08-20
tags:
  - "files"
  - "downloading"
level: 2
category: "testing"
---

## The Problem

In a [previous tip](http://elementalselenium.com/tips/2-download-a-file) we stepped through how to download files with Selenium by configuring the browser to download them locally and verifying their file size when done.

While this works it requires a custom configuration that is inconsistent from browser to browser.

## A Solution

Ultimately we shouldn't care if a file was downloaded or not. Instead, we should care that a file _can_ be downloaded. And we can do that by using an HTTP client alongside Selenium in our test.

With an HTTP library we can perform a header (or `HEAD`) request for the file. Instead of downloading the file we'll receive header information for the file which contains information like the content type and content length (amongst other things). With this information we can easily confirm the file is what we expect without onerous configuration, local disk usage, or lengthy download times (depending on the file size).

Let's dig with an example.

## An Example

To start things off let's pull in our requisite libraries (e.g., `selenium-webdriver` to drive the browser, `rspec/expectations` and `RSpec::Matchers` for our assertions, and `rest-client` for our HTTP request) and wire up some simple `setup`, `teardown`, and `run` methods.

```ruby
# filename: download_revisited.rb

require 'selenium-webdriver'
require 'rspec/expectations'
require 'rest-client'
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
```

Now we're ready to wire up our test.

It's just a simple matter of visiting the page with download links, grabbing a URL from one of them, and performing a `HEAD` request with it.

```ruby
run do
  @driver.get 'http://the-internet.herokuapp.com/download'
  link = @driver.find_element(css: '.example a').attribute('href')
  response = RestClient.head link
  expect(response.headers[:content_type]).to eql('application/pdf')
  expect(response.headers[:content_length].to_i).to be > 0
end
```

Once we receive the response we can check it's header for the `content_type` and `content_length` to make sure the file is the correct type and not empty.

## Expected Behavior

If you save this and run it (e.g., `ruby download_revisited.rb` from the command-line) here is what will will happen:

+ Open the browser
+ Load the page
+ Grab the URL of the first download link
+ Perform a `HEAD` request against it with an HTTP library
+ Store the response
+ Check the response headers to see that the file type is correct
+ Check the response headers to see that the file is not empty

## Outro

Compared to the browser specific configuration with Selenium this is hands-down a leaner, faster, and more maintainable approach.

Happy Testing!
