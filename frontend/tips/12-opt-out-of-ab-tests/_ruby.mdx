## Example

Our example page is from [the-internet](http://github.com/tourdedave/the-internet) and can be seen [here](http://the-internet.herokuapp.com/abtest). There are three different versions of the page that are available. On each page the heading text will vary:

- Control: `A/B Test Control`
- Variation 1: `A/B Test Variation 1`
- Opt-out: `No A/B Test`

Let's kick things off by loading our requisite libraries (e.g., `selenium-webdriver` to control the browser and `rspec/expectations` and it's matchers for our assertions) and adding some simple `setup`, `teardown`, and `run` methods to handle our test configuration.

```ruby
# filename: split_test.rb

require 'selenium-webdriver'
require 'rspec/expectations'
include ::RSpec::Matchers

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

Now let's wire up our first test to step through loading the split testing page and verifying that the text changes as we forge an opt-out cookie.

```ruby
run do
  @driver.get 'http://the-internet.herokuapp.com/abtest'
  heading_text = @driver.find_element(css: 'h3').text
  expect(['A/B Test Variation 1', 'A/B Test Control'].include? heading_text).to eql true
  @driver.manage.add_cookie(name: 'optimizelyOptOut', value: 'true')
  @driver.navigate.refresh
  heading_text = @driver.find_element(css: 'h3').text
  expect(heading_text).to eql('No A/B Test')
end
```

After navigating to the page we confirm that we are in one of the A/B test groups by grabbing the heading text and checking to see if it matches what we expect. After that we add the opt-out cookie, refresh the page, and then confirm that we are no longer in the A/B test group by checking the heading text again.

We could also load the opt-out cookie before navigating to this page.

```ruby
run do
  @driver.get 'http://the-internet.herokuapp.com'
  @driver.manage.add_cookie(name: 'optimizelyOptOut', value: 'true')
  @driver.get 'http://the-internet.herokuapp.com/abtest'
  expect(@driver.find_element(css: 'h3').text).to eql('No A/B Test')
end
```

Here we first navigate to the main page of the site and then add the opt-out cookie. After that, we navigate to the split test page and perform our checks. Alternatively, we could opt out without forging a cookie. Instead we would need to append an opt out request to the URL.

```ruby
run do
  @driver.get 'http://the-internet.herokuapp.com/abtest?optimizely_opt_out=true'
  @driver.switch_to.alert.dismiss
  expect(@driver.find_element(css: 'h3').text).to eql('No A/B Test')
end
```

By appending `?optimizely_opt_out=true` we achieve the same outcome as before. Keep in mind that this approach triggers a JavaScript alert, so we have to switch to and dismiss it (e.g., `@driver.switch_to.alert.dismiss`) before performing our check.

## Expected Behavior

If you save this file and run it (e.g., `ruby split_test.rb` from the command-line) here is what will happen:

- Open the browser
- Opt-out of the split tests (either by cookie or appended URL)
- Visit the split testing page
- Grab the header text
- Confirm that the session is opted out of the split tests
- Close the browser

## Summary

Hopefully this tip was helpful in guiding you in different methods of how to opt out of split tests.

Happy Testing!