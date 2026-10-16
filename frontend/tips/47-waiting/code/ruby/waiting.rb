require 'selenium-webdriver'
require 'rspec/expectations'
include RSpec::Matchers

BASE_URL = 'https://the-internet.herokuapp.com/dynamic_loading'

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

def wait_for(seconds)
  Selenium::WebDriver::Wait.new(timeout: seconds).until { yield }
end

# An implicit wait gives up before the element is rendered
run do
  @driver.manage.timeouts.implicit_wait = 3
  @driver.get "#{BASE_URL}/2"
  @driver.find_element(css: '#start button').click
  expect { @driver.find_element(id: 'finish') }.to raise_error(Selenium::WebDriver::Error::NoSuchElementError)
end

# An implicit wait doesn't wait for hidden elements to be displayed
run do
  @driver.manage.timeouts.implicit_wait = 3
  @driver.get "#{BASE_URL}/1"
  @driver.find_element(css: '#start button').click
  expect(@driver.find_element(id: 'finish').displayed?).to eql false
end

# An explicit wait waits for what we need, in both examples
%w[1 2].each do |example|
  run do
    @driver.get "#{BASE_URL}/#{example}"
    @driver.find_element(css: '#start button').click
    wait_for(10) { @driver.find_element(id: 'finish').displayed? }
    expect(@driver.find_element(id: 'finish').text).to eql('Hello World!')
  end
end
