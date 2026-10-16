require 'selenium-webdriver'
require 'rspec/expectations'
include RSpec::Matchers

MESSAGE = 'Congratulations! You must have the proper credentials.'

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

# Credentials in the URL
run do
  @driver.get 'https://admin:admin@the-internet.herokuapp.com/basic_auth'
  page_message = @driver.find_element(css: '.example p').text
  expect(page_message).to eql(MESSAGE)
end

# Credentials cached by the browser
run do
  @driver.get 'https://admin:admin@the-internet.herokuapp.com/basic_auth'
  @driver.get 'https://the-internet.herokuapp.com/basic_auth'
  page_message = @driver.find_element(css: '.example p').text
  expect(page_message).to eql(MESSAGE)
end
