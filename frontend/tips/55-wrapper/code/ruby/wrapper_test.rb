require 'selenium-webdriver'
require 'rspec/expectations'
require_relative 'wrapper'
include RSpec::Matchers

def setup
  @listener = Wrapper.new
  @driver = Selenium::WebDriver.for(:firefox, listener: @listener)
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
  @driver.find_element(link_text: 'Checkboxes').click

  expect(@listener.messages).to eql [
    'Navigated to https://the-internet.herokuapp.com',
    'Finding element Checkboxes',
    'Found element Checkboxes',
    'Clicking on Checkboxes',
    'URL changed to https://the-internet.herokuapp.com/checkboxes'
  ]
end
