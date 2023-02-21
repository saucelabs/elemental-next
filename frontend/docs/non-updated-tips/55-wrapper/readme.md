---
title: 'How To Add A Wrapper To Your Selenium Tests'
slug: '55-wrapper'
number: 55
publish_date: 2014-06-17
tags:
  - 'wrapper'
  - 'growl'
  - 'growl notifications'
level: 2
category: 'infrastructure'
---

## The Problem

In [a previous tip](http://elementalselenium.com/tips/54-logging) I stepped through how to access Selenium logs in real time. But the final implementation was a bit lacking. We had to explicitly request the logs after each test action, which is fine for one-offs. But what if we wanted information for **every** test action?

## A Solution

Instead of hard-coding logging requests all over the place, we can leverage an event listener to give us the information we want -- automatically and for each Selenium action.

## A brief primer on Event Listeners in Selenium

This functionality is built in to Selenium in what's called the [AbstractEventListener](https://code.google.com/p/selenium/source/browse/rb/lib/selenium/webdriver/support/abstract_event_listener.rb). This is a class which comes preloaded with helper methods that enable us to add behavior before and after common Selenium actions -- here's a list of the available methods:

- `before_navigate_to`
- `after_navigate_to`
- `before_navigate_back`
- `after_navigate_back`
- `before_navigate_forward`
- `after_navigate_forward`
- `before_find`
- `after_find`
- `before_click`
- `after_click`
- `before_change_value_of`
- `after_change_value_of`
- `before_execute_script`
- `after_execute_script`
- `before_quit`
- `after_quit`
- `before_close`
- `after_close`

We can pick and choose from each of these methods and specify the additional behavior we want to occur. After that, it's just a simple matter of passing this information to Selenium when creating a browser instance.

Let's dig in with an example.

## An Example

To start, let's create a `Wrapper` class that inherits from `AbstractEventListener` and add our behavior there.

The helper methods we're interested in are `after_navigate_to`, `before_find`, `after_find`, `before_click`, and `after_click` and they each require different arguments to be specified. See [here](https://code.google.com/p/selenium/source/browse/rb/lib/selenium/webdriver/support/abstract_event_listener.rb#30) for details.

And to make things interesting, let's wire up [jQuery Growl notifications](http://elementalselenium.com/tips/53-growl).

```ruby
# filename: wrapper.rb

class Wrapper < Selenium::WebDriver::Support::AbstractEventListener

  def after_navigate_to(url, driver)
    add_growl(driver)
    display_growl(driver, "Navigated to #{url}")
  end

  def before_find(by, what, driver)
    display_growl(driver, "Finding element #{what}")
  end

  def after_find(by, what, driver)
    display_growl(driver, "Found element #{what}")
  end

  def before_click(element, driver)
    display_growl(driver, "Clicking on #{element.text}")
    @pre_click_url = driver.current_url
  end

  def after_click(element, driver)
    unless @pre_click_url == driver.current_url
      add_growl(driver)
      display_growl(driver, "URL changed to #{driver.current_url}")
    end
  end

  private

  def add_growl(driver)
     driver.execute_script("if (!window.jQuery) {
        var jquery = document.createElement('script'); jquery.type = 'text/javascript';
        jquery.src = 'https://ajax.googleapis.com/ajax/libs/jquery/2.0.2/jquery.min.js';
        document.getElementsByTagName('head')[0].appendChild(jquery);
      }")

    driver.execute_script("$.getScript('http://the-internet.herokuapp.com/js/vendor/jquery.growl.js')")

    driver.execute_script("$('head').append('<link rel=\"stylesheet\" href=\"http://the-internet.herokuapp.com/css/jquery.growl.css\" type=\"text/css\" />');")

    sleep 1
  end

  def display_growl(driver, message)
    driver.execute_script("$.growl({ title: 'Selenium', message: '#{message}' });")
    sleep 0.5
  end

end
```

Our Event Listener helper methods give us access to the driver object at the precise moments we want in our test steps, and by wiring up growl notifications (see `add_growl` and `display_growl`) we can now display notification messages in the browser window automatically without any additional work in our test code.

Let's go ahead and wire up our test code to use this new wrapper.

```ruby
# filename: wrapper_test.rb

require 'selenium-webdriver'
require_relative 'wrapper'
require 'rspec-expectations'
include RSpec::Matchers

def setup
  @driver = Selenium::WebDriver.for :firefox, listener: Wrapper.new
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
  @driver.find_elements(css: 'a').last.click
end
```

Everything here is pretty standard with the exception of two small changes to handle our wrapper. We first need to include the file (`require_relative 'wrapper'`) and then pass in an instance of the wrapper to Selenium (`listener: Wrapper.new`).

Now if we run our test (`ruby wrapper_test.rb`) then we will see notification messages appear around each of the test actions as they occur.

## Expected Behavior

- Load the browser
- Load jQuery if it's not already loaded
- Load jQuery Growl and it's styles
- Display notifications in the browser window for each of the test actions

## See a Demo

<iframe src="//player.vimeo.com/video/98736887" width="500" height="313" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
<br></br>
Happy Testing!
