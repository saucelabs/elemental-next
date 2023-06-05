---
language: ruby
level: 3
hide_sidebar: true
publish_date: 2013-07-23
last_update:
  date: 2023-03-25
---

## A Solution

With a Base Page Object (a.k.a. a facade layer) we can abstract all common actions into a central location and leverage them in any Page Object we see fit.

## Example

In this example we are going to take the code from our previous tip ([Using a Page Object](http://elementalselenium.com/tips/7-use-a-page-object)) and modify it to use a Base Page Object.

Previous tip's code to be modified:

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

end

run do
  dynamic_loading = DynamicLoading.new(@driver)
  dynamic_loading.start
  dynamic_loading.finish_present?
  expect(dynamic_loading.finish_text).to eql('Hello World!')
end
```

Now let's modify this code to perform a Google search. First, we include our libraries and wire up our setup, teardown, and run actions as usual.

```ruby
require 'selenium-webdriver'
require 'rspec/expectations'
include RSpec::Matchers

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

  SEARCH_BOX        = { name: 'q' }
  TOP_SEARCH_RESULT = { css: '#rso .g' }

  def initialize(driver)
    super(driver)
    visit('/')
    verify_page
  end

  def search_for(search_term)
    type SEARCH_BOX, search_term
    find(SEARCH_BOX).send_keys(:enter)
  end

  def search_result_present?(search_result)
    wait_for { displayed?(TOP_SEARCH_RESULT) }
    text_of(TOP_SEARCH_RESULT).include? search_result
  end

  private

    def verify_page
      expect(driver.title).to include ('Google')
    end

end
```

Once that's done, we'll add our actual test script.

```ruby
run {
  google = GoogleSearch.new(@driver)
  google.search_for 'elemental selenium tips'
  result = google.search_result_present? 'Elemental Selenium'
  expect(result).to be == true
}
```

## Expected Behavior

+ Load Google
+ Search for _elemental selenium tips_
+ Wait for the first search result to render
+ Grab the text from it
+ Assert that the text we want is within it

## Summary

Now we are in a position to write more Page Objects that leverage common actions without duplication or any Selenium code directly in them.

Hopefully this tip has helped you find your way further down the rabbit hole of Page Objects (in a good way).

Happy Testing!

## About The Author

Dave Haeffner is the original writer of Elemental Selenium -- a free, once weekly Selenium tip newsletter that's read by thousands of testing professionals. He also created and maintains the-internet (an open-source web app that's perfect for writing automated tests against).

Dave has helped numerous companies successfully implement automated acceptance testing; including The Motley Fool, ManTech International, Sittercity, and Animoto. He is also an active member of the Selenium project and has spoken at numerous conferences and meetups around the world about automated acceptance testing.

![Dave Haeffner profile picture](/img/authors/dave-haeffner.jpeg#author-img 'a title')
