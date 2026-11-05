require 'selenium-webdriver'
require 'rspec/expectations'
include RSpec::Matchers

def setup
  # Selenium Manager finds Chrome and the matching ChromeDriver, and downloads them when they are missing
  @driver = Selenium::WebDriver.for :chrome
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
  expect(@driver.title).to eql('The Internet')
  capabilities = @driver.capabilities
  puts "Chrome #{capabilities.browser_version}, " \
       "ChromeDriver #{capabilities['chrome']['chromedriverVersion'].split(' ').first}"
end
