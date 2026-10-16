require 'selenium-webdriver'
require 'rspec/expectations'
include RSpec::Matchers

HIGHLIGHT_STYLE = 'border: 2px solid red; border-style: dashed;'

def setup
  @driver = Selenium::WebDriver.for(:firefox)
  @driver.get 'https://the-internet.herokuapp.com/large'
end

def teardown
  @driver.quit
end

def run
  setup
  yield
  teardown
end

def highlight(element, duration = 3)
  # store the original style so it can be reset later
  original_style = element.dom_attribute('style') || ''
  # style the element with a red dashed border
  @driver.execute_script("arguments[0].setAttribute('style', arguments[1])", element, HIGHLIGHT_STYLE)
  # keep the element highlighted for a spell and then revert
  return unless duration.positive?

  sleep duration
  @driver.execute_script("arguments[0].setAttribute('style', arguments[1])", element, original_style)
end

# Highlight an element
run do
  element = @driver.find_element(id: 'sibling-2.3')
  highlight(element, 0)
  expect(element.dom_attribute('style')).to match(/dashed/)
end

# Highlight an element, and revert its style afterward
run do
  element = @driver.find_element(id: 'sibling-2.3')
  highlight(element, 1)
  expect(element.dom_attribute('style').to_s).not_to match(/dashed/)
end
