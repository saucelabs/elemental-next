require 'selenium-webdriver'
require 'rspec/expectations'
include RSpec::Matchers

def setup
  @driver = Selenium::WebDriver.for(:firefox)
  @driver.get 'https://the-internet.herokuapp.com/checkboxes'
  @checkboxes = @driver.find_elements(css: 'input[type="checkbox"]')
end

def teardown
  @driver.quit
end

def run
  setup
  yield
  teardown
end

# Attribute lookup
run do
  p(@checkboxes.map { |checkbox| checkbox.dom_attribute('checked') })
  expect(@checkboxes.first.dom_attribute('checked')).to be_nil
  expect(@checkboxes.last.dom_attribute('checked')).not_to be_nil
end

# Selected?
run do
  p(@checkboxes.map(&:selected?))
  expect(@checkboxes.first.selected?).to eql false
  expect(@checkboxes.last.selected?).to eql true
end
