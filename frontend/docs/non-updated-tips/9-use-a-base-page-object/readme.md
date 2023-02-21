---
title: "Using a Base Page Object"
slug: "9-use-a-base-page-object"
number: 9
publish_date: 2013-07-23
tags:
  - "page object"
  - "abstraction"
level: 3
category: "patterns"
---

## The Problem

In a [previous example](http://elementalselenium.com/tips/7-use-a-page-object) we stepped through creating a simple Page Object to capture the behavior of a page we were interacting with. While this was a good start, it leaves a lot of room for improvement.

The most obvious problem is that there are common actions we will likely need across multiple Page Objects. And with our current approach we would end up with duplicative code.

And less obviously, we are using Selenium actions directly in the Page Object. While on the face of it this may seem fine it has some long term impacts like...
+ the inability to drive your tests with a different driver if needbe
+ test maintenance issues when Selenium actions change
+ slower test writing due to the lack of a Domain Specific Language (DSL)


## A Solution

With a Base Page Object (a.k.a. a facade layer) we can abstract all common actions into a central location and leverage them in any Page Object we see fit.


## An Example

In this example we are going to take the code from our previous tip ([Using a Page Object](http://elementalselenium.com/tips/7-use-a-page-object)) and upgrade it to use a Base Page Object.

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

run {
  google = GoogleSearch.new(@driver)
  google.search_for 'elemental selenium tips'
  result = google.search_result_present? 'Receive a Free, Weekly Tip'
  result.should == true
}
```

Everything stays the same in the beginning of our example. We include our libraries and wire up our setup, teardown, and run actions.

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

Next we create our Base Page Object. It's a simple Ruby class that our other Page Objects will inherit from.

At the top of it we set an `attr_reader` to store the Selenium driver object that gets passed to it through the `initialize` method. And the rest of the class is filled with a series of common Selenium actions that we pull from the GoogleSearch Page Object.

```ruby
class Base

  attr_reader :driver

  def initialize(driver)
    @driver = driver
  end

  def visit(url='/')
    driver.get(ENV['base_url'] + url)
  end

  def find(locator)
    driver.find_element locator
  end

  def clear(locator)
    find(locator).clear
  end

  def type(locator, input)
    find(locator).send_keys input
  end

  def click_on(locator)
    find(locator).click
  end

  def displayed?(locator)
    driver.find_element(locator).displayed?
    true
    rescue Selenium::WebDriver::Error::NoSuchElementError
      false
  end

  def text_of(locator)
    find(locator).text
  end

  def title
    driver.title
  end

  def wait_for(seconds=5)
    Selenium::WebDriver::Wait.new(:timeout => seconds).until { yield }
  end

end
```

With the Base class in hand we simply update the GoogleSearch Page Object to inherit from it (with `< Base` after the class name) and wire it up and clean things up.

Since we have some actions we want to execute when we load the GoogleSearch object, we keep them in the `initialize` method. But since we are inheriting from the Base class we need to call `super` before them. This is responsible for passing the driver object into the Base class and making all of its methods run smoothly.

```ruby
class GoogleSearch < Base

  SEARCH_BOX        = { id: 'gbqfq'     }
  SEARCH_BOX_SUBMIT = { id: 'gbqfb'     }
  TOP_SEARCH_RESULT = { css: '#rso .g'  }

  def initialize(driver)
    super
    visit
    verify_page
  end

  def search_for(search_term)
    type SEARCH_BOX, search_term
    click_on SEARCH_BOX_SUBMIT
  end

  def search_result_present?(search_result)
    wait_for { displayed?(TOP_SEARCH_RESULT) }
    text_of(TOP_SEARCH_RESULT).include? search_result
  end

  private

    def verify_page
      title.include?('Google').should == true
    end

end
```

Once that's done, our actual test script remains unchanged.

```ruby
run {
  google = GoogleSearch.new(@driver)
  google.search_for 'elemental selenium tips'
  result = google.search_result_present? 'Receive a Free, Weekly Tip'
  result.should == true
}
```

## Expected Behavior

+ Load Google
+ Search for _elemental selenium tips_
+ Wait for the first search result to render
+ Grab the text from it
+ Assert that the text we want is within it


## Outro

Now we are in a position to write more Page Objects that leverage common actions without duplication or any Selenium code directly in them.

Hopefully this tip has helped you find your way further down the rabbit hole of Page Objects (in a good way).

Happy Testing!
