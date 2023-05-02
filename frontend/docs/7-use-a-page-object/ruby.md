---
title:'7: Use A Page Object'
id: '7-use-a-page-object-ruby'
contentUrl: "docs/use-a-page-object/7-use-a-page-object-ruby"
sidebar_label: Ruby 
text: "One of the biggest challenges with Selenium tests is that they can be brittle and challenging to maintain over time.
This is largely due to the fact that things in the app you're testing change, breaking your tests."
number: 7
publish_date: 2013-07-09
last_update:
  date: 2023-03-08
tags:
  - 'page object'
  - 'abstraction'
level: 2
category:
  - 'tools'
language: ruby
---

# Using a Page Object

## Intro

One of the biggest challenges with Selenium tests is that they can be brittle and challenging to maintain over time.
This is largely due to the fact that things in the app you're testing change, breaking your tests.

But the reality of a software project is that change is a constant. So we need to account for this reality somehow
in our test code in order to be successful.

## A Solution

Enter Page Objects.

Rather than write your test code directly against your app, you can model the behavior of your application into
simple objects -- and write your tests against them instead. That way when your app changes and your tests break,
you only have to update your test code in one place to fix it.

And with this approach, we not only get the benefit of controlled chaos, we also get the benefit of reusable behavior.

## Example

In this example we are going to take the following sample code and upgrade it with the use of a Page Object.

```ruby
require 'selenium-webdriver'
require 'rspec/expectations'
include RSpec::Matchers

def setup
  @driver = Selenium::WebDriver.for :firefox
  @base_url = 'http://the-internet.herokuapp.com/dynamic_loading/2'
end

def teardown
  @driver.quit
end

def run
  setup
  yield
  teardown
end

def wait_for(seconds=10)
  Selenium::WebDriver::Wait.new(:timeout => seconds).until { yield }
end

run do
    @driver.get @base_url
    @driver.find_element(css: '#start button').click
    wait_for { @driver.find_element(css: '#finish').displayed? }
    expect(@driver.find_element(css: '#finish').text).to eql('Hello World!')
end
```

The first order of business is pretty simple. We keep our setup, teardown, and run actions mostly the same.
But we change the base_url from an instance variable to an environment variable. Doing this will enable
us to access it from anywhere in our test suite.

While the usage of environment variables can be a slippery slope, this is an ideal candidate for it since
it effects the overall behavior of the suite.

```ruby
require 'selenium-webdriver'
require 'rspec/expectations'
include RSpec::Matchers

def setup
  @driver = Selenium::WebDriver.for :firefox
  ENV['base_url'] = 'http://the-internet.herokuapp.com/dynamic_loading/2'
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

Next we create a Page Object for the Dynamic Loading page by using a standard Ruby class and add some relevant
bits to it.

At the top of it we pull out the CSS locators used in our test steps and put them into helpfully
named constants to use instead. And instead of using the two part 'how', 'what' approach, we are
using a hash to store the locator type and its value.

Next we use `attr_reader` to create a place to store the Selenium WebDriver instance for use throughout the class.

The class expects an argument (e.g. the Selenium WebDriver instance) which is received through the initialize method.
Inside the initialize method we take care of passing the Selenium object into the `attr_reader` object along with
visiting the page and verifying that we are in the correct place. All of these things will execute in order when
this class is instantiated.

We then break out each of the test steps into methods that execute the behavior specific to the page while also
swapping out the hard-coded CSS locators for our new CSS locator constant variables.

At the bottom of the class we have private helper methods. These methods aren't necessarily specific to the page
this class represents, but they are useful for it to function. So we want to access them within the class, but
make it so they're not available outside of the class. Using the private classification gets us this behavior nicely.

And lastly, we update the `displayed?` private method to take a single argument for a 'locator' object (e.g. one of
our CSS locator constant variables).

```ruby
class DynamicLoading

  START_BUTTON = { css: '#start button' }
  FINISH_BUTTON = { css: '#finish' }

  attr_reader :driver

  def initialize(driver)
    @driver = driver
    visit
    verify_page
  end

  def visit
    driver.get ENV['base_url']
  end

  def start
    driver.find_element(START_BUTTON).click
  end

  def finish_present?
    wait_for { @driver.find_element(FINISH_BUTTON).displayed? }
  end

  def finish_text
    driver.find_element(FINISH_BUTTON).text
  end

  private

    def verify_page
      expect(driver.title).to eql('The Internet')
    end

    def wait_for(seconds=10)
      Selenium::WebDriver::Wait.new(:timeout => seconds).until { yield }
    end

end
```

With our new Page Object in hand, our run action cleans up considerably. Making it more succinct and readable.

```ruby
run do
  dynamic_loading = DynamicLoading.new(@driver)
  dynamic_loading.start
  dynamic_loading.finish_present?
  expect(dynamic_loading.finish_text).to eql('Hello World!')
end
```

It's worth noting that while we are peforming an assertion in the Page Object in our `verify_page`
action __assertions should only be performed in your test scripts__ (just like the run action above).
Using a `verify_page` action is just a helpful exception to the rule.

## Expected Behavior

+ Load Dynamic Loading page on The Internet
+ Click on start
+ Wait for the finish message to appear
+ Grab the text from it
+ Assert that the text we want is within it

## Summary

Hopefully this tip has helped you wade into the waters of Page Objects in Selenium.

Stay tuned for a future tip where we implement a Base Page Object class to abstract things even further
and roll our own Domain Specific Language (DSL) for our test suite.

Until then, Happy Testing!

## About The Author

Dave Haeffner is the original writer of Elemental Selenium -- a free, once weekly Selenium tip newsletter that's read by
thousands of testing professionals. He also created and maintains the-internet (an open-source web app that's perfect
for writing automated tests against).

Dave has helped numerous companies successfully implement automated acceptance testing; including The Motley Fool,
ManTech International, Sittercity, and Animoto. He is also an active member of the Selenium project and has spoken at
numerous conferences and meetups around the world about automated acceptance testing.
