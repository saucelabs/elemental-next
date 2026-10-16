require 'selenium-webdriver'
require 'rspec/expectations'
include RSpec::Matchers

def setup
  @driver = Selenium::WebDriver.for(:firefox)
  @driver.get 'https://the-internet.herokuapp.com/javascript_alerts'
  @driver.find_elements(css: 'button')[1].click
end

def teardown
  @driver.quit
end

def run
  setup
  yield
  teardown
end

def alert
  Selenium::WebDriver::Wait.new(timeout: 5).until { @driver.switch_to.alert }
end

# Accept the confirmation
run do
  alert.accept
  expect(@driver.find_element(id: 'result').text).to eql('You clicked: Ok')
end

# Dismiss the confirmation
run do
  alert.dismiss
  expect(@driver.find_element(id: 'result').text).to eql('You clicked: Cancel')
end
