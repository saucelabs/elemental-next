require 'selenium-webdriver'
require 'rspec/expectations'
include RSpec::Matchers

def setup
  options = Selenium::WebDriver::Options.chrome
  # Turns on WebDriver BiDi, which sends the console messages and errors of the page to the test
  options.web_socket_url = true
  @driver = Selenium::WebDriver.for(:chrome, options: options)
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

run do
  messages = []
  errors = []
  @driver.script.add_console_message_handler { |entry| messages << "#{entry.level}: #{entry.text}" }
  @driver.script.add_javascript_error_handler { |entry| errors << entry.text }

  @driver.get 'https://the-internet.herokuapp.com/network_console'
  @driver.find_element(id: 'log-console').click
  @driver.find_element(id: 'throw-error').click

  wait = Selenium::WebDriver::Wait.new(timeout: 5)
  wait.until { messages.size == 3 && errors.size == 1 }
  # The messages can arrive in any order
  expect(messages).to contain_exactly(
    'info: the-internet: a log message',
    'warn: the-internet: a warning',
    'error: the-internet: an error message'
  )
  expect(errors).to eql(['Error: the-internet: thrown on purpose'])
end
