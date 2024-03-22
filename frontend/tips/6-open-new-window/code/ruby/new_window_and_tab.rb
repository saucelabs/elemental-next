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

run do
    @driver.get 'https://the-internet.herokuapp.com/windows'
    @driver.switch_to.new_window(:window)
    @driver.get('https://the-internet.herokuapp.com/typos')
    expect(@driver.window_handles.size).to eql 2
end

run do
    @driver.get 'https://the-internet.herokuapp.com/windows'
    @driver.switch_to.new_window(:tab)
    @driver.get('https://the-internet.herokuapp.com/typos')
    expect(@driver.window_handles.size).to eql 2
end
