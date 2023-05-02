---
title: "69: Safari"
id: "69-safari-ruby"
contentUrl: "docs/safari/69-safari-ruby"
sidebar_label: Ruby
text: "Since Selenium 2.45.0, in order to use SafariDriver, you need to manually install the SafariDriver browser extension."
number: 69
publish_date: 2015-08-25
last_update:
  date: 2023-03-13
tags:
  - "safari"
  - "drivers"
  - "safaridriver"
  - "different browsers"
level: 1
category:
  - "tools"
language: ruby
---

# Safari Browser

## Intro

Since Selenium 2.45.0, in order to use SafariDriver, you need to manually install the SafariDriver browser extension.

## A Solution

Running your Selenium tests on a different browser tends to require additional setup, and [SafariDriver](https://github.com/SeleniumHQ/selenium/wiki/SafariDriver) is no exception.

The following example will go through how to do it and make sure it's working.

## Example

Run the following command on the terminal:

`$  /usr/bin/safaridriver --enable`

After that, make sure it's enabled. To do that:

1. open `Safari`
2. go to `Develop`
3. click on `Allow Remote Automations`

Now if we open up an interactive Ruby terminal (e.g., `irb`) and launch a Selenium instance, here's what we'd see.

```sh
> irb
irb(main):001:0> require 'selenium-webdriver'
irb(main):002:0> driver = Selenium::WebDriver.for :safari
```

A successful communication between Safari and the Selenium Driver extension has occurred.

Now let's wire up a simple test so we can see that everything works as expect.

```ruby
# filename: safari.rb

require 'selenium-webdriver'
require 'rspec/expectations'
include RSpec::Matchers

def setup
  @driver = Selenium::WebDriver.for :safari
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
  @driver.get 'http://the-internet.herokuapp.com'
  expect(@driver.title).to eql 'The Internet'
end
```

## Expected Behavior

When you save the file and run it (e.g., `ruby safari.rb` from the command-line), here is what will happen:

- Safari opens
- The home page of [the-internet](http://github.com/tourdedave/the-internet) loads
- The title of the page is checked to make sure it's what we expect
- Safari closes

## Summary

Keep in mind that Safari can load without you realizing it (since it doesn't obtain focus when launching with Selenium). When that happens you'll need to switch to Safari in order to see what the test is doing.

And if you're running Safari on a remote node (or set of nodes), you'll need to install and enable the SafariDriver browser extension on each of them.

Happy Testing!

## About The Author

Dave Haeffner is the original writer of Elemental Selenium -- a free, once weekly Selenium tip newsletter that's read by thousands of testing professionals. He also created and maintains the-internet (an open-source web app that's perfect for writing automated tests against).

Dave has helped numerous companies successfully implement automated acceptance testing; including The Motley Fool, ManTech International, Sittercity, and Animoto. He is also an active member of the Selenium project and has spoken at numerous conferences and meetups around the world about automated acceptance testing.
