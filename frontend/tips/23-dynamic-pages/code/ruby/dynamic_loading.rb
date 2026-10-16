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

def wait_for(seconds = 10)
  Selenium::WebDriver::Wait.new(timeout: seconds).until { yield }
end

# The element is on the page, but hidden
run do
  @driver.get 'https://the-internet.herokuapp.com/dynamic_loading/1'
  @driver.find_element(css: '#start button').click
  wait_for { @driver.find_element(id: 'finish').displayed? }
  expect(@driver.find_element(id: 'finish').displayed?).to eql true
end

# The element is rendered after the loading finishes
run do
  @driver.get 'https://the-internet.herokuapp.com/dynamic_loading/2'
  @driver.find_element(css: '#start button').click
  wait_for { @driver.find_element(id: 'finish').displayed? }
  expect(@driver.find_element(id: 'finish').displayed?).to eql true
end
