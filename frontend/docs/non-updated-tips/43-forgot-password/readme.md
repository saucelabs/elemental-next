---
title: "How To Test Forgot Password"
slug: "43-forgot-password"
number: 43
publish_date: 2015-10-15
tags:
  - "forgot password"
  - "email"
level: 2
category: "testing"
---

## The Problem

Testing e-mail can be a tricky process. Especially when dealing with things like forgot password. A lot of times this is something that gets checked manually. Or worse, it gets overlooked and ends up broken in production.

## A Solution

By leveraging a third-party library we can perform an end-to-end test by accessing a forgot password email from a Gmail account headlessly (to get the information we need) and then put it to use with Selenium to make sure it works correctly.

Let's dig in with an example that uses [the forgot password example](http://the-internet.herokuapp.com/forgot_password) on [the-internet](https://github.com/tourdedave/the-internet).

## An Example

First let's include our dependent libraries (e.g., `selenium-webdriver` to control the browser, `rspec/expectations` and `RSpec::Matchers` for assertions, and [`gmail`](https://github.com/dcparker/ruby-gmail) to access a Gmail account headlessly) and create some simple `setup`, `teardown`, and `run` methods to handle our test configuration.

```ruby
# filename: forgot_password.rb

require 'selenium-webdriver'
require 'rspec-expectations'
include RSpec::Matchers
require 'gmail'

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

Once triggered, the forgot password e-mail should be received quickly. But since we're dealing with a third-party provider we'll want to build in some resiliency. So let's create a simple mechanism to retry our email lookup a configurable number of times and make it wait a handful of seconds in-between each attempt.

```ruby
def try(number_of_times)
  count = 0 ; item_of_interest = nil
  until item_of_interest != nil || count == number_of_times
    item_of_interest = yield
    sleep 10
    count += 1
  end
end
```

When calling this method, we will need to specify an integer for the number of times that we'd like to retry an action. And we'll specify the action by passing it to the method through the use of `yield` (which enables us to pass a block of code into the method just like we're doing for the `run` method). Between each attempt, the method will wait for `10` seconds.

Now let's wire up our test.

```ruby
run do
  @driver.get 'http://the-internet.herokuapp.com/forgot_password'
  @driver.find_element(id: 'email').send_keys(ENV['EMAIL_USERNAME'])
  @driver.find_element(id: 'form_submit').click

  gmail = Gmail.new(ENV['EMAIL_USERNAME'], ENV['EMAIL_PASSWORD'])
  try(6) { @email = gmail.inbox.emails(:unread, from: 'no-reply@the-internet.herokuapp.com').last }
  message_body = @email.message.body.raw_source

  url =  message_body.scan(/https?:\/\/[\S]+/).last
  username = message_body.scan(/username: (.*)$/)[0][0].strip
  password = message_body.scan(/password: (.*)$/)[0][0].strip

  @driver.get url
  @driver.find_element(id: 'username').send_keys username
  @driver.find_element(id: 'password').send_keys password
  @driver.find_element(id: 'login').submit
  expect(@driver.current_url.include?('/secure')).to eql true
end
```

We initiate the forgot password workflow by loading the page with the forgot password form, providing an email address, and submitting the form. We then access the Gmail account headlessly. Notice that the username and password credentials are specified with environment variables, but you could just as easily hard-code your credentials here.

After connecting we attempt to retrieve the message body. Here is where we employ our `try` method (retrying the lookup action up to `6` times). If the inbox lookup doesn't find what it's looking for, it will return `nil`, which will trigger the `try` loop to run again after waiting `10` seconds. If it finds what we're looking for, then the loop will stop running and the test will proceed.

Once the forgot password email is found we parse it's body with regular expressions to find the URL & user credentials in it. We then put these values to use with our browser session (which is still active) by visiting the URL and logging in. Once done we assert that login was successful by checking to see if we gained access to a secure part of the site.

## Expected Behavior

If you save this file and run it (e.g., `ruby forgot_password.rb` from the command-line) here is what will happen:

+ Open the browser
+ Visit the page and initiate the forgot password workflow
+ Headlessly access Gmail and retrieve the email message body
+ Parse the message body for user credentials
+ Visit the site and login with the user credentials
+ Check that login was successful
+ Close the browser

__NOTE: When running this script you can pass in the Gmail account username and password at runtime (e.g., `EMAIL_USERNAME=youremail@gmail.com EMAIL_PASSWORD=yourpassword ruby forgot_password.rb`).__

## Outro

Your forgot password workflow might be different, so adapt as needed. And if you have other things in an e-mail message body that you need to parse for and aren't sure of the regular expressions you need -- give [Rubular](http://rubular.com/) a try.

Happy Testing!
