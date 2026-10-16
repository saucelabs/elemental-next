require 'selenium-webdriver'
require 'rspec/expectations'
include RSpec::Matchers

def setup
  @driver = Selenium::WebDriver.for(:firefox)
  @driver.get 'https://the-internet.herokuapp.com/login'
  @driver.find_element(id: 'username').send_keys('tomsmith')
  @driver.find_element(id: 'password').send_keys('SuperSecretPassword!')
  @driver.find_element(css: '#login button').click
  Selenium::WebDriver::Wait.new(timeout: 10).until { @driver.find_element(css: '.flash.success').displayed? }
end

def teardown
  @driver.quit
end

def run
  setup
  yield
  teardown
end

def rescue_exceptions
  yield
rescue Selenium::WebDriver::Error::NoSuchElementError, Selenium::WebDriver::Error::StaleElementReferenceError
  false
end

def displayed?(locator)
  rescue_exceptions { @driver.find_element(locator).displayed? }
end

# Looking for a missing element raises an exception
run do
  expect { @driver.find_element(id: 'login').displayed? }.to raise_error(Selenium::WebDriver::Error::NoSuchElementError)
end

# The login form is not displayed
run do
  expect(displayed?(id: 'login')).to eql false
end
