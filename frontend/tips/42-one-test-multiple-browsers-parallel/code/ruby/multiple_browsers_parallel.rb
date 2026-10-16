require 'selenium-webdriver'
require 'rspec/expectations'
include RSpec::Matchers

SAUCE_URL = 'https://ondemand.us-west-1.saucelabs.com/wd/hub'
BROWSERS = %i[chrome firefox edge].freeze

unless ENV['SAUCE_USERNAME'] && ENV['SAUCE_ACCESS_KEY']
  puts 'Set SAUCE_USERNAME and SAUCE_ACCESS_KEY to run this test on Sauce Labs'
  exit 0
end

def setup(browser)
  options = Selenium::WebDriver::Options.send(browser)
  options.browser_version = 'latest'
  options.platform_name = 'Windows 11'
  options.add_option('sauce:options', username: ENV['SAUCE_USERNAME'],
                                      access_key: ENV['SAUCE_ACCESS_KEY'],
                                      name: "Elemental Selenium - Tip 42 - Ruby - #{browser}")
  Thread.current[:driver] = Selenium::WebDriver.for(:remote, url: SAUCE_URL, options: options)
end

def teardown
  Thread.current[:driver]&.quit
end

def run
  threads = BROWSERS.map do |browser|
    Thread.new do
      setup(browser)
      yield
    ensure
      teardown
    end
  end
  # join re-raises any error from the thread (e.g., a failed assertion), so the script fails too.
  threads.each(&:join)
end

run do
  Thread.current[:driver].get 'https://the-internet.herokuapp.com'
  expect(Thread.current[:driver].title).to eql('The Internet')
end
