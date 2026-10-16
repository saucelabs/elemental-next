require 'selenium-webdriver'
require 'rspec/expectations'
include RSpec::Matchers

def setup
  @driver = Selenium::WebDriver.for(:firefox)
  @driver.get 'https://the-internet.herokuapp.com/download'
end

def teardown
  @driver.quit
end

def run
  setup
  yield
  teardown
end

# The first link on the page
run do
  link = @driver.find_element(css: 'a').attribute('href')
  puts link
  expect(link).to match(/github\.com/)
end

# The first link in the content
run do
  link = @driver.find_element(css: '#content a').attribute('href')
  puts link
  expect(link).to match(%r{/download/})
end

# The first link in the example
run do
  link = @driver.find_element(css: '#content .example a').attribute('href')
  puts link
  expect(link).to match(%r{/download/})
end
