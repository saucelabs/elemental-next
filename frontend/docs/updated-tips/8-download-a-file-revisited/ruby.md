---
title: "8: Download A File Revisited"
id: "8-download-a-file-revisited-ruby"
contentUrl: "docs/download-a-file-revisited/8-download-a-file-revisited-ruby"
sidebar_label: Ruby
text: "In a previous tip we went through how to download files with Selenium by configuring the browser to download them locally and verifying their file size when done. While the previous method works, it requires a custom configuration that is inconsistent from browser to browser."
number: 8
publish_date: 2015-08-20
last_update:
  date: 03-08-2023
tags:
  - "files"
  - "downloading"
level: 2
category:
  - "remote"
language: ruby
---

# How to Download a File Without a Browser

## Intro

In a [previous tip](/tips/2-download-a-file) we went through how to download files with Selenium by configuring the browser to download them locally and verifying their file size when done.

While the previous method works, it requires a custom configuration that is inconsistent from browser to browser.

Ultimately, we shouldn't care if a file was downloaded or not. Instead, we should care that a file _can_ be downloaded, which we can do by using an HTTP client alongside Selenium in our test.

## A Solution

Ultimately we shouldn't care if a file was downloaded or not. Instead, we should care that a file _can_ be downloaded. And we can do that by using an HTTP client alongside Selenium in our test.

With an HTTP library we can perform a header (or `HEAD`) request for the file. Instead of downloading the file we'll receive header information for the file which contains information like the content type and content length (amongst other things). With this information we can easily confirm the file is what we expect without onerous configuration, local disk usage, or lengthy download times (depending on the file size).

Let's continue with an example.

## Example

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

Now we're ready to write up our test.

It's just a simple matter of visiting the page with download links, grabbing a URL from one of them, and performing a `HEAD` request with it.

```ruby
run do
  @driver.get 'http://the-internet.herokuapp.com/download'
  link = @driver.find_element(css: '.example a').attribute('href')
  response = RestClient.head link
  expect(response.headers[:content_type]).to eql('application/octet-stream')
  expect(response.headers[:content_length].to_i).to be > 0
end
```

Once we receive the response we can check it's header for the `content_type` and `content_length` to make sure the file is the correct type and not empty.

## Expected Behavior

If you save this and run it (e.g., `ruby download_revisited.rb` from the command-line) here is what will will happen:

- Open the browser
- Load the page
- Grab the URL of the first download link
- Perform a `HEAD` request against it with an HTTP library
- Store the response
- Check the response headers to see that the file type is correct
- Check the response headers to see that the file is not empty

## Summary

Compared to the browser specific configuration with Selenium this is hands-down a leaner, faster, and more maintainable approach.

Happy Testing!

## About The Author

Dave Haeffner is the original writer of Elemental Selenium -- a free, once weekly Selenium tip newsletter that's read by thousands of testing professionals. He also created and maintains the-internet (an open-source web app that's perfect for writing automated tests against).

Dave has helped numerous companies successfully implement automated acceptance testing; including The Motley Fool, ManTech International, Sittercity, and Animoto. He is also an active member of the Selenium project and has spoken at numerous conferences and meetups around the world about automated acceptance testing.
