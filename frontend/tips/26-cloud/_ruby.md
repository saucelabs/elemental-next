---
language: ruby
level: 1
hide_sidebar: true
publish_date: 2015-09-15
last_update:
  date: 2023-02-27
---

## Example


**NOTE**: You'll need an account to use Sauce Labs. You can sign up for a
[free trial account (no credit-card required)](https://saucelabs.com/sign-up).

First we'll include our dependent libraries (to drive the browser and do assertions), and wire up some simple
`setup`, `teardown`, and `run` methods. We recommend exporting your Sauce Labs `SAUCE_USERNAME` and
`SAUCE_ACCESS_KEY` as environment variables.

Here are instructions for setting environment variables on each Operating System:

* [Windows](https://www.architectryan.com/2018/08/31/how-to-change-environment-variables-on-windows-10/)
* [macOS](https://apple.stackexchange.com/questions/106778/how-do-i-set-environment-variables-on-os-x)
* [Linux](https://askubuntu.com/questions/58814/how-do-i-add-environment-variables)

```ruby
# filename: cloud.rb

require 'selenium-webdriver'
require 'rspec/expectations'
include RSpec::Matchers

def setup
  options = Selenium::WebDriver::Options.chrome
  options.browser_version = '109'
  options.platform_name = 'macOS 13'
  sauce_options = {}
  sauce_options[:name] = 'Elemental Selenium - Tip 26 - Hello!'
  options.add_option('sauce:options', sauce_options)

  url = "https://#{ENV['SAUCE_USERNAME']}:#{ENV['SAUCE_ACCESS_KEY']}@ondemand.us-west-1.saucelabs.com:443/wd/hub"
  @driver = Selenium::WebDriver.for(:remote, :url => url, :capabilities => options)
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

Our `setup` method is where the magic is happening. We declare the browser options
for Chrome and store it in a variable for immediate reuse. We then set the browser version
(e.g. `options.browser_version = '109'`, but you can also use `latest` to use the most recent
version), specify the operating system we would like to use (e.g. `options.platform_name = 'macOS 13'`),
and set the test name (e.g., `sauce_options[:name] = 'Elemental Selenium - Tip 26 - Hello!'`).

We then connect to Sauce Labs with Selenium WebDriver and feed in our browser options object.

**NOTE**: The URL contains the URI for the Sauce Labs cl service as well as our Sauce user and
access credentials. In this case, they are specified through environment variables. But you can
just as easily hard-code your info here. We recommend exporting your Sauce Labs `SAUCE_USERNAME` and
`SAUCE_ACCESS_KEY` as environment variables.

Here are instructions for setting environment variables on each Operating System:

* [Windows](https://www.architectryan.com/2018/08/31/how-to-change-environment-variables-on-windows-10/)
* [macOS](https://apple.stackexchange.com/questions/106778/how-do-i-set-environment-variables-on-os-x)
* [Linux](https://askubuntu.com/questions/58814/how-do-i-add-environment-variables)

Now we're ready to add a test to run in Sauce Labs.

```ruby
run do
  @driver.get 'http://the-internet.herokuapp.com'
  expect(@driver.title.include?('The Internet')).to eql true
end
```

If we save this and run it (e.g., `ruby cloud.rb` from the command-line) it will execute the test on
an Chrome 109 browser instance running on macOS 13 (Ventura) in Sauce Labs.

## Another Browser

If you want to change up the browser, you would just need to alter the options:

```ruby
  # For Chrome 110
  options = Selenium::WebDriver::Options.chrome
  options.browser_version = '110'
```

Or...

```ruby
  # For Safari 16
  options = Selenium::WebDriver::Options.safari
  options.browser_version = '16'
```

Or...

```ruby
  # For Edge 109
  options = Selenium::WebDriver::Options.edge
  options.browser_version = '109'
```

**NOTE**: You can find a full list of configuration options along with example code for all of Sauce supported
languages at their [Platform Configurator](https://saucelabs.com/products/platform-configurator#/).

## Expected Behavior

- Open a specified browser in Sauce Labs
- Test runs
- Browser closes
- Test results (along with a video recording, screenshots, and other debugging information) are available on the
[test results dashboard](https://docs.saucelabs.com/test-results/viewing-test-results/).

## Summary

Hopefully this tip has helped you get your tests up and running against numerous browsers.

There are some other things to consider when using Sauce Labs (e.g., testing your secure apps through
[Sauce Connect](https://docs.saucelabs.com/secure-connections/sauce-connect/), setting the pass/fail status
for your tests, and dynamically setting the test name). You can find more information about these things
in [the Sauce Labs docs](https://docs.saucelabs.com/).

Happy Testing!