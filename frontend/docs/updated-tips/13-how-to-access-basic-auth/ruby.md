---
title:'13: Ruby'
id: '13-work-with-basic-auth-ruby'
sidebar_label: Ruby 
text: 'Sometimes you'll work with applications that are secured behind [Basic HTTP Authentication](http://en.wikipedia.org/wiki/Basic_access_authentication) (a.k.a. Basic Auth). In order to access them you'll need to pass credentials to the site when requesting a page otherwise you'll get a system level pop-up prompting you for a username and password -- rendering Selenium helpless.'
number: 13
publish_date: 2015-10-14
last_update:
  date: 2023-02-22
tags:
  - 'authentication'
level: 1
category:
  - 'troubleshooting'
language: ruby
---

# How to Access Basic Auth

## Intro

In this guide, you will learn how to pass credentials to a site when requesting a page that is secured behind Basic HTTP Authentication.

Sometimes you'll work with applications that are secured behind [Basic HTTP Authentication](http://en.wikipedia.org/wiki/Basic_access_authentication) (a.k.a. Basic Auth). In order to access them you'll need to pass credentials to the site when requesting a page otherwise you'll get a system level pop-up prompting you for a username and password -- rendering Selenium helpless.

Before Selenium 2 we were able to accomplish this by injecting credentials into a custom header, but now a popular way to do it is using something like [BrowserMob Proxy](http://bmp.lightbody.net/). Some people are also solving this issue with browser specific configurations but those methods feel a little heavy and complicated.

Instead, let's use a more straightforward approach that is browser agnostic and quick to setup.

## A Solution

By specifying the username and password _in the URL_ when visiting a page with Selenium, we can a side-step the system level dialog box and avoid setting up a proxy server. This approach will work for both HTTP or HTTPS pages.

## Example 1

Let's start by requiring our requisite libraries (e.g., `selenium-webdriver` to drive the browser and `rspec/expectations` & `RSpec::Matchers` to handle our assertions) and implementing some helper methods (e.g., `setup`, `teardown`, and `run`) to handle our test configuration.

```ruby
# filename: basic_auth.rb

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
```

Now let's add our test code to the script.

```ruby
run do
  @driver.get 'http://admin:admin@the-internet.herokuapp.com/basic_auth'
  page_message = @driver.find_element(css: '.example p').text
  expect(page_message).to eql 'Congratulations! You must have the proper credentials.'
end
```

In the test we're loading the page by passing in the username and password in the front of the URL (e.g., `http://admin:admin@`). Once it loads we grab text from the page to make sure we ended up in the right place.

## Example 2

Alternatively, we could have accessed this page as part of the test setup (after creating an instance of Selenium). This would have cached the Basic Auth session in the browser, enabling us to visit the page again without having to specify credentials. This is particularly useful if you have numerous pages behind Basic Auth.

Here's what that script would look like.

```ruby
# filename: basic_auth_setup.rb

require 'selenium-webdriver'
require 'rspec/expectations'
include RSpec::Matchers

def setup
  @driver = Selenium::WebDriver.for :firefox
  @driver.get 'http://admin:admin@the-internet.herokuapp.com/basic_auth'
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
  @driver.get 'http://the-internet.herokuapp.com/basic_auth'
  page_message = @driver.find_element(css: '.example p').text
  expect(page_message).to eql 'Congratulations! You must have the proper credentials.'
end
```

NOTE: If your application serves both HTTP and HTTPS pages from behind Basic Auth then you will need to load one of each type before executing your test steps. Otherwise you will get authorization errors when switching between HTTP and HTTPS because the browser can't use Basic Auth credentials interchangeably (e.g. HTTP for HTTPS and vice versa).__

## Expected Behavior

When you save the first example and run it (e.g., `ruby basic_auth.rb`), here is what will happen:

+ Open the browser
+ Visit the page using Basic Auth
+ Get the page text
+ Assert that the text is what we expect
+ Close the browser

And when you save the second example and run it (e.g., `ruby basic_auth_setup.rb`), here is what will happen:

+ Open the browser
+ Visit the page using Basic Auth in the setup
+ Navigate to the Basic Auth page (without providing credentials)
+ Get the page text
+ Assert that the text is what we expect


## Summary

Hopefully these examples will help save you from getting any setbacks from Basic Auth when you come across it.

Happy Testing!

## About The Author

Dave Haeffner is the original writer of Elemental Selenium -- a free, once weekly Selenium tip newsletter that's read by thousands of testing professionals. He also created and maintains the-internet (an open-source web app that's perfect for writing automated tests against).

Dave has helped numerous companies successfully implement automated acceptance testing; including The Motley Fool, ManTech International, Sittercity, and Animoto. He is also an active member of the Selenium project and has spoken at numerous conferences and meetups around the world about automated acceptance testing.
