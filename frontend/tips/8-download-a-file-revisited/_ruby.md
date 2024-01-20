## Example

To start things off let's pull in our requisite libraries (e.g., `selenium-webdriver` to drive the browser, `rspec/expectations` and `RSpec::Matchers` for our assertions, and `rest-client` for our HTTP request) and wire up some simple `setup`, `teardown`, and `run` methods.

```ruby
# filename: download_revisited.rb

require 'selenium-webdriver'
require 'rspec/expectations'
require 'rest-client'
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

Now we're ready to write up our test.

It's just a simple matter of visiting the page with download links, grabbing a URL from one of them, and performing a `HEAD` request with it.

```ruby
run do
  @driver.get 'http://the-internet.herokuapp.com/download'
  link = @driver.find_element(css: '.example a').attribute('href')
  response = RestClient.head link
  expect(response.headers[:content_type]).to eql('application/octet-stream')
  expect(response.headers[:content_length].to_i).to be > 0
end
```

Once we receive the response we can check it's header for the `content_type` and `content_length` to make sure the file is the correct type and not empty.

## Expected Behavior

If you save this and run it (e.g., `ruby download_revisited.rb` from the command-line) here is what will will happen:

- Open the browser
- Load the page
- Grab the URL of the first download link
- Perform a `HEAD` request against it with an HTTP library
- Store the response
- Check the response headers to see that the file type is correct
- Check the response headers to see that the file is not empty

## Summary

Compared to the browser specific configuration with Selenium this is hands-down a leaner, faster, and more maintainable approach.

Happy Testing!
