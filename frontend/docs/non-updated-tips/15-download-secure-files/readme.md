---
title: "How To Download Secure Files"
slug: "15-download-secure-files"
number: 15
publish_date: 2015-08-20
tags:
  - "files"
  - "downloading"
  - "authentication"
level: 3
category: "testing"
---

## The Problem

In [a previous tip](http://elementalselenium.com/tips/8-download-a-file-revisited) we covered how to test file downloads without a browser by leveraging Selenium Webdriver and an HTTP library in tandem.

This approach is a great unless the file you want to download is behind authentication.

## A Solution

To access secure files with our HTTP library we'll need to pull the authenticated session information out of Selenium's cookie store and pass it into the HTTP library when we perform the request.

Let's dig in with an example.

## An Example

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

Next we'll wire up our test. In it we'll want to access a page of download links that is behind some form of authentication (Basic HTTP Authentication in this case).

```ruby
run do
  @driver.get 'http://admin:admin@the-internet.herokuapp.com/download_secure'
  cookie = @driver.manage.cookie_named 'rack.session'
  link = @driver.find_element(css: '.example a').attribute('href')
  response = RestClient.head link, cookie: { cookie[:name] => cookie[:value] }
  expect(response.headers[:content_type]).to eql('image/jpeg')
  expect(response.headers[:content_length].to_i).to be > 0
end
```

Once the page loads, we grab the authentication session cookie from Selenium along with the URL for the first file listed. Then we fire up our HTTP library and perform a `HEAD` request using both the download link and the session cookie. We then check the response headers to make sure the file is the correct type and that it's not empty.

__NOTE: For more information on why we're using a `HEAD` request instead of a `GET`, see [this previous tip](http://elementalselenium.com/tips/8-download-a-file-revisited).__

## A Small Bit of Cleanup

If we run this it will pass. But it's only limited to the first download link and it's unfortunately quite brittle (since the test assumes that the file will always be an image). Let's update our example to remedy this.

```ruby
def content_type(file)
  file = File.basename(file)
  if file.include? '.jpg'
    'image/jpeg'
  elsif file.include? '.pdf'
    'application/pdf'
  else
    raise 'Unknown file type'
  end
end
```

With this new helper method we can tease out the filename from a given URL and return the correct content type. If the file type isn't recognized, then we'll stop the test and raise an exception.

Now we can update our test to use this method in addition to grabbing all download links from the page and iterating through them.

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

## Outro

From here, it's simple enough to add in additional content types and file types. And while this example demonstrates accessing files behind Basic HTTP Authentication it should also work with files behind form-based authentication.

Hopefully this helps save you some time, enabling you to build a more lean and fast set of download tests.

Happy Testing!
