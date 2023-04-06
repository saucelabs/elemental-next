---
title: 'Ruby'
id: '15-download-secure-files-ruby'
slug: ruby/
number: 15
publish_date: 2015-08-20
last_update:
  date: 2023-03-27
tags:
  - 'files'
  - 'downloading'
  - 'authentication'
level: 3
category: 'fundamentals'
language: ruby
---

# How to Download Secure Files

## Intro

Previously, we've gone over how to test file downloads without a browser by leveraging Selenium Webdriver and an HTTP library in tandem.

This approach is great for testing general file downloads, but what if the file you want to download is behind authentication?

## A Solution

To access secure files with our HTTP library we'll need to pull the authenticated session information out of Selenium's cookie store and pass it into the HTTP library when we perform the request.

Let's continue with some examples.

## Example 1

First let's require our libraries (`selenium-webdriver` to drive the browser, `rspec/expectations` & `RSpec::Matchers` for our assertions, and `rest-client` for our HTTP requests) and wire up some simple `setup`, `teardown`, and `run` methods.

```ruby
# filename: secure_download.rb

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

Next we'll write our test. In it we'll want to access a page of download links that is behind some form of authentication (Basic HTTP Authentication in this case).

```ruby
run do
  @driver.get 'http://admin:admin@the-internet.herokuapp.com/download_secure'
  cookie = @driver.manage.cookie_named 'rack.session'
  link = @driver.find_element(css: '.example a').attribute('href')
  response = RestClient.head link, cookie: { cookie[:name] => cookie[:value] }
  expect(response.headers[:content_type]).to eql('application/octet-stream')
  expect(response.headers[:content_length].to_i).to be > 0
end
```

Once the page loads, we grab the authentication session cookie from Selenium along with the URL for the first file listed. Then we fire up our HTTP library and perform a `HEAD` request using both the download link and the session cookie. We then check the response headers to make sure the file is the correct type and that it's not empty.

If we run this script, it will pass. But, it's only limited to the first download link, and it assumes that the file will always be whatever we declared (in this case 'application/octet-stream').

In the next example, let's update the script to remedy these issues.

## Example 2

Here, we will update our previous example code to make the script more robust, by adding a helper method just before our test code.

```ruby
def content_type(file)
  file = File.basename(file)
  if file.include? '.txt'
    'application/octet-stream'
  elsif file.include? '.pdf'
    'application/pdf'
  else
    raise 'Unknown file type'
  end
end
```

With this new helper method added, we can tease out the filename from a given URL and return the correct content type. If the file type isn't recognized, then we'll stop the test and raise an exception.

Now we can update our test code to use this method in addition to grabbing all download links from the page and iterating through them.

```ruby
run do
  @driver.get 'http://admin:admin@the-internet.herokuapp.com/download_secure'
  cookie = @driver.manage.cookie_named 'rack.session'
  links = @driver.find_elements(css: '.example a')
  links.map! { |link| link.attribute('href') }
  links.each do |link|
    response = RestClient.head link, cookie: { cookie[:name] => cookie[:value] }
    expect(response.headers[:content_type]).to eql(content_type(link))
    expect(response.headers[:content_length].to_i).to be > 0
  end
end
```

By using `find_elements` (plural) we get _all_ of the download links (returned in an array). We then use `map!` to update the array of download links to give us _just_ the URLs (instead of a collection of Selenium objects which contain URLs). After that, we're able to iterate over the array of URLs, performing a `HEAD` request and assertions for each one (but this time, we're using our new `content_type` helper method).

## Expected Behavior

If we save this file and run it (e.g., `ruby secure_download.rb` from the command-line), here is what will happen.

+ Browser opens
+ The secure file downloads page loads
+ The authenticated cookie information is retrieved
+ All download URLs on the page are found
+ HTTP library performs a HEAD request against the download link using the retrieved cookie information
+ The response headers are checked to make sure the file is the correct type and not empty
+ The previous two steps are repeated until all download links are verified
+ Browser closes

## Summary

From here, it's simple enough to add in additional content types and file types. And while this example demonstrates accessing files behind Basic HTTP Authentication it should also work with files behind form-based authentication.

Hopefully this helps save you some time, enabling you to build a more lean and fast set of download tests.

Happy Testing!

## About The Author

Dave Haeffner is the original writer of Elemental Selenium -- a free, once weekly Selenium tip newsletter that's read by thousands of testing professionals. He also created and maintains the-internet (an open-source web app that's perfect for writing automated tests against).

Dave has helped numerous companies successfully implement automated acceptance testing; including The Motley Fool, ManTech International, Sittercity, and Animoto. He is also an active member of the Selenium project and has spoken at numerous conferences and meetups around the world about automated acceptance testing.
