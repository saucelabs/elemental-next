---
title: "How To Work With JavaScript Alerts"
slug: "51-javascript-alerts"
number: 51
publish_date: 2015-07-01
tags:
  - "javascript"
  - "javascript alerts"
  - "javascript popups"
  - "javascript dialogs"
level: 1
category: "testing"
---

## The Problem

If your application triggers any JavaScript pop-ups (a.k.a. alerts, dialogs, etc.) then you need to know how to handle them in your Selenium tests.

## A Solution

Built into Selenium is the ability to switch to an alert window and either accept or dismiss it. This way your tests can continue unencumbered by dialog boxes that may feel just out of reach.

Let's dig in with an example.

## An Example

Our example application is available [here](http://the-internet.herokuapp.com/javascript_alerts) on [the-internet](http://github.com/tourdedave/the-internet). It has various JavaScript Alerts available (e.g., an alert, a confirmation, and a prompt). Let's demonstrate testing a confirmation dialog (e.g., a prompt which asks the user to click `Ok` or `Cancel`).

First, we'll include our requisite libraries (e.g., `selenium-webdriver` to control the browser and `rspec/expectations` and `RSpec::Matchers` for our assertion) and wire up some simple `setup`, `teardown`, and `run` methods.

```ruby
# filename: javascript_alerts.rb

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

Now let's write our test.

```ruby
run do
  @driver.get 'http://the-internet.herokuapp.com/javascript_alerts'
  @driver.find_elements(css: 'button')[1].click

  popup = @driver.switch_to.alert
  popup.accept

  result = @driver.find_element(id: 'result').text
  expect(result).to eql('You clicked: Ok')
end
```

A quick glance at the page's markup shows that there are no unique IDs on the buttons. So to click on the second button (to trigger the JavaScript confirmation dialog) we find all of the buttons on the page using `find_elements` and click on the second one. Since `find_elements` returns an Array of all found elements, we can assume that the first item can be selected using `[0]` (since Arrays in Ruby start counting at `0`). So the second item would be `[1]`.

After click the button to trigger the JavaScript Alert we use Selenium's `switch_to.alert` method to focus on the JavaScript pop-up and use `.accept` to click `Ok`. If we wanted to click `Cancel` we would have used `.dismiss`.

After accepting the alert, our main browser window will automatically regain focus and the page will display the result that we chose. This text is what we use for our assertion, making sure that the words `You clicked: Ok` are displayed on the page.

## Expected Behavior

If you save this file and run it (e.g., `ruby javascript_alerts.rb` from the command-line) here is what will happen:

+ Open the browser
+ Load the page
+ Click the second button on the page
+ JavaScript Confirmation Alert appears
+ Accept the JavaScript Confirmation Alert
+ Assert that the result on the page is what we expect
+ Close the browser

## Outro

Happy Testing!
