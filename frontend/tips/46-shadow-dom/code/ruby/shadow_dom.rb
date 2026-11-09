require 'selenium-webdriver'
require 'rspec/expectations'
include RSpec::Matchers

def setup
  @driver = Selenium::WebDriver.for(:firefox)
  @driver.get 'https://the-internet.herokuapp.com/shadowdom_advanced'
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

# Click a button inside nested shadow roots
run do
  outer_root = @driver.find_element(id: 'outer-card').shadow_root
  inner_root = outer_root.find_element(css: '#inner-card').shadow_root
  inner_root.find_element(css: '#inner-button').click

  expect(@driver.find_element(id: 'nested-result').text).to eql('You clicked the button in the inner shadow root')
end

# A normal locator does not find it
run do
  expect(@driver.find_elements(css: '#inner-button')).to be_empty
end
