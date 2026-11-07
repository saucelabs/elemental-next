require 'selenium-webdriver'
require 'rspec/expectations'
include RSpec::Matchers

# Safari runs on macOS only, so the test is skipped on Windows and Linux
unless Selenium::WebDriver::Platform.mac?
  puts 'Skipped: Safari runs on macOS only'
  exit
end

def setup
  @driver = Selenium::WebDriver.for :safari
end

def teardown
  @driver.quit
end

def run
  setup
  yield
ensure
  teardown
end

run do
  @driver.get 'https://the-internet.herokuapp.com'
  capabilities = @driver.capabilities
  puts "#{capabilities.browser_name} #{capabilities.browser_version}"

  expect(@driver.title).to eql('The Internet')
end
