## Example

Our example application is available [here](http://the-internet.herokuapp.com/hovers) on [the-internet](http://github.com/tourdedave/the-internet). It has a few avatars displayed in a grid layout. When you hover over each of them, they display additional user information and a link to view a full profile.

We're going to write a test that will hover over the first avatar and make sure that this additional information appears.

First, we'll want to include our requisite libraries (e.g., `selenium-webdriver` to control the browser, and `rspec/expectations` and `RSpec::Matchers` for our assertion) and wire up some `setup`, `teardown`, and `run` methods.

```ruby
# filename: hover.rb

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
  @driver.get 'http://the-internet.herokuapp.com/hovers'
  an_avatar = @driver.find_element(class: 'figure')
  @driver.action.move_to(an_avatar).perform
  expect(@driver.find_element(class: 'figcaption').displayed?).to eql true
end
```

After loading the page we find the first avatar and store it in a variable (`an_avatar`). We then use Selenium's `action.move_to` method and feed the avatar variable to it (which triggers the hover).

We then check to see if the additional user information is displayed with `.displayed?` and wrap that in an assertion.

## Expected Behavior

If we save this file and run it (e.g., `ruby hover.rb` from the command-line) here is what will happen:

+ Open the browser
+ Visit the page
+ Hover over the first avatar
+ Assert that the caption appeared on the page
+ Close the browser


## Summary

Hopefully this will help you handle more complex user interactions like hovers.

Happy Testing!
