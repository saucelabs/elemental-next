require 'selenium-webdriver'
require 'rspec/expectations'
include RSpec::Matchers

def setup
  @driver = Selenium::WebDriver.for(:firefox)
  @driver.get 'https://the-internet.herokuapp.com/key_presses'
end

def teardown
  @driver.quit
end

def run
  setup
  yield
  teardown
end

# Send keys to an element
run do
  @driver.find_element(id: 'target').send_keys :space
  expect(@driver.find_element(id: 'result').text).to eql('You entered: SPACE')
end

# Send keys without finding an element first
run do
  @driver.action.send_keys(:tab).perform
  expect(@driver.find_element(id: 'result').text).to eql('You entered: TAB')
end
