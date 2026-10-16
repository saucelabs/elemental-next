require 'selenium-webdriver'
require 'rspec/expectations'
include RSpec::Matchers

def setup
  @driver = Selenium::WebDriver.for(:firefox)
end

def teardown
  @driver.quit
end

def run
  setup
  yield
  teardown
end

def option(text)
  @driver.find_elements(tag_name: 'option').find { |option| option.text == text }
end

run do
  @driver.get 'https://the-internet.herokuapp.com/dropdown'
  expect(option('Please select an option').enabled?).to eql false
  expect(option('Option 1').enabled?).to eql true
end
