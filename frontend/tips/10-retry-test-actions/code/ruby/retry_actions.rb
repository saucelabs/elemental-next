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

def retry_if_message_contains(fail_message, attempts = 10)
  message = yield
  (attempts - 1).times do
    break unless message.include?(fail_message)

    message = yield
  end
  message
end

run do
  message = retry_if_message_contains('please try again') do
    @driver.get 'https://the-internet.herokuapp.com/notification_message'
    @driver.find_element(id: 'flash').text
  end
  expect(message).to match(/Action successful/)
end
