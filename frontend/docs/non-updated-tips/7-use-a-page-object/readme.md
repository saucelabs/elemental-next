---
title: "Using a Page Object"
slug: "7-use-a-page-object"
number: 7
publish_date: 2013-07-09
tags:
  - "page object"
  - "abstraction"
level: 2
category: "patterns"
---

## The Problem

One of the biggest challenges with Selenium tests is that they can be brittle and challenging to maintain over time. This is largely due to the fact that things in the app you're testing change, breaking your tests.

But the reality of a software project is that change is a constant. So we need to account for this reality somehow in our test code in order to be successful.


## A Solution

Enter Page Objects.

Rather than write your test code directly against your app, you can model the behavior of your application into simple objects -- and write your tests against them instead. That way when your app changes and your tests break, you only have to update your test code in one place to fix it.

And with this approach, we not only get the benefit of controlled chaos, we also get the benefit of reusable behavior.


## An Example

In this example we are going to take the following example code from a previous tip ([Exporting from Selenium IDE](http://elementalselenium.com/tips/6-export-from-selenium-ide)) and upgrade it with the use of a Page Object.

```ruby
require 'selenium-webdriver'
require 'rspec-expectations'

def setup
  @driver = Selenium::WebDriver.for :firefox
  @base_url = 'http://www.google.com'
end

def teardown
  @driver.quit
end

def run
  setup
  yield
  teardown
end

def wait_for(seconds=5)
  Selenium::WebDriver::Wait.new(:timeout => seconds).until { yield }
end

def displayed?(how, what)
  @driver.find_element(how, what).displayed?
  true
  rescue Selenium::WebDriver::Error::NoSuchElementError
    false
end

run {
    @driver.get(@base_url + "/")
    @driver.find_element(:id, "gbqfq").clear
    @driver.find_element(:id, "gbqfq").send_keys "elemental selenium tips"
    @driver.find_element(:id, "gbqfb").click
    wait_for { displayed?(:css, '#rso .g') }
    @driver.find_element(:css, '#rso .g').text.should =~ /Receive a Free, Weekly Tip/
}
```

The first order of business is pretty simple. We keep our setup, teardown, and run actions mostly the same. But we change the base_url from an instance variable to an environment variable. Doing this will enable us to access it from anywhere in our test suite.

While the usage of environment variables can be a slippery slope, this is an ideal candidate for it since it effects the overall behavior of the suite.


```ruby
require 'selenium-webdriver'
require 'rspec-expectations'

def setup
  @driver = Selenium::WebDriver.for :firefox
  ENV['base_url'] = 'http://www.google.com'
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

Next we create a Page Object for Google Search by using a standard Ruby class and add some relevant bits to it.

At the top of it we pull out the CSS locators used in our test steps and put them into helpfully named constants to use instead. And instead of using the two part 'how', 'what' approach, we are using a hash to store the locator type and its value.

Next we use attr_reader to create a place to store the Selenium WebDriver instance for use throughout the class.

The class expects an argument (e.g. the Selenium WebDriver instance) which is received through the initialize method. Inside the initialize method we take care of passing the Selenium object into the attr_reader object along with visiting the page and verifying that we are in the correct place. All of these things will execute in order when this class is instantiated.

We then break out each of the test steps into methods that execute the behavior specific to the page while also swapping out the hard-coded CSS locators for our new CSS locator constant variables.

At the bottom of the class we have private helper methods. These methods aren't necessarily specific to the page this class represents, but they are useful for it to function. So we want to access them within the class, but make it so they're not available outside of the class. Using the private classification gets us this behavior nicely.

And lastly, we update the `displayed?` private method to take a single argument for a 'locator' object (e.g. one of our CSS locator constant variables).

```ruby
class GoogleSearch

  SEARCH_BOX        = { id: 'gbqfq'     }
  SEARCH_BOX_SUBMIT = { id: 'gbqfb'     }
  TOP_SEARCH_RESULT = { css: '#rso .g'  }

  attr_reader :driver

  def initialize(driver)
    @driver = driver
    visit
    verify_page
  end

  def visit
    driver.get ENV['base_url']
  end

  def search_for(search_term)
    driver.find_element(SEARCH_BOX).clear
    driver.find_element(SEARCH_BOX).send_keys search_term
    driver.find_element(SEARCH_BOX_SUBMIT).click
  end

  def search_result_present?(search_result)
    wait_for { displayed?(TOP_SEARCH_RESULT) }
    driver.find_element(TOP_SEARCH_RESULT).text.include? search_result
  end

  private

    def verify_page
      driver.title.include?('Google').should == true
    end

    def wait_for(seconds=5)
      Selenium::WebDriver::Wait.new(:timeout => seconds).until { yield }
    end

    def displayed?(locator)
      driver.find_element(locator).displayed?
      true
      rescue Selenium::WebDriver::Error::NoSuchElementError
        false
    end

end
```

With our new Page Object in hand, our run action cleans up considerably. Making it more succinct and readable.

```ruby
run {
  google = GoogleSearch.new(@driver)
  google.search_for 'elemental selenium tips'
  result = google.search_result_present? 'Receive a Free, Weekly Tip'
  result.should == true
}
```

It's worth noting that while we are peforming an assertion in the Page Object in our `verify_page` action __assertions should only be performed in your test scripts__ (just like the run action above). Using a `verify_page` action is just a helpful exception to the rule.


## Expected Behavior

+ Load Google
+ Search for _elemental selenium tips_
+ Wait for the first search result to render
+ Grab the text from it
+ Assert that the text we want is within it


## Outro

Hopefully this tip has helped you wade into the waters of Page Objects in Selenium.

Stay tuned for a future tip where we implement a Base Page Object class to abstract things even further and roll our own Domain Specific Language (DSL) for our test suite.

Until then, Happy Testing!
