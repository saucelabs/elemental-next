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
    @driver.find_element(css: '.example a').click
    @driver.switch_to.window(@driver.window_handles.first)
    expect(@driver.title).to eql 'The Internet'
    @driver.switch_to.window(@driver.window_handles.last)
    # Waiting for the new window to have a title, then we consider it is loaded
    wait = Selenium::WebDriver::Wait.new(timeout: 2)
    wait.until { @driver.title != "" }
    expect(@driver.title).to eql 'New Window'
end

run do
    @driver.get 'https://the-internet.herokuapp.com/windows'

    first_window = @driver.window_handle
    @driver.find_element(css: '.example a').click
    all_windows = @driver.window_handles
    new_window = all_windows.find { |window| window != first_window }

    @driver.switch_to.window(first_window)
    expect(@driver.title).to eql 'The Internet'

    @driver.switch_to.window(new_window)
    # Waiting for the new window to have a title, then we consider it is loaded
    wait = Selenium::WebDriver::Wait.new(timeout: 2)
    wait.until { @driver.title != "" }
    expect(@driver.title).to eql 'New Window'
end
