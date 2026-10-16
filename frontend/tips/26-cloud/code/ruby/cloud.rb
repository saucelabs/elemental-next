require 'selenium-webdriver'
require 'rspec/expectations'
include RSpec::Matchers

SAUCE_URL = 'https://ondemand.us-west-1.saucelabs.com/wd/hub'

unless ENV['SAUCE_USERNAME'] && ENV['SAUCE_ACCESS_KEY']
  puts 'Set SAUCE_USERNAME and SAUCE_ACCESS_KEY to run this test on Sauce Labs'
  exit 0
end

def setup
  options = Selenium::WebDriver::Options.chrome
  options.browser_version = 'latest'
  options.platform_name = 'Windows 11'
  options.add_option('sauce:options', username: ENV['SAUCE_USERNAME'],
                                      access_key: ENV['SAUCE_ACCESS_KEY'],
                                      name: 'Elemental Selenium - Tip 26 - Ruby')
  @driver = Selenium::WebDriver.for(:remote, url: SAUCE_URL, options: options)
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
  @driver.get 'https://the-internet.herokuapp.com'
  expect(@driver.title).to match(/The Internet/)
end
