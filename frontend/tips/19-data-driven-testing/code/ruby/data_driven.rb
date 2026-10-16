require 'selenium-webdriver'
require 'rspec/expectations'
require 'csv'
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

def user_data
  CSV.read(File.join(__dir__, 'user_data.csv'), headers: true, header_converters: :symbol).map(&:to_h)
end

def notification_text
  wait = Selenium::WebDriver::Wait.new(timeout: 5)
  wait.until { @driver.find_element(id: 'flash').displayed? }
  @driver.find_element(id: 'flash').text
end

user_data.each do |user|
  run do
    @driver.get 'https://the-internet.herokuapp.com/login'
    @driver.find_element(id: 'username').send_keys user[:username]
    @driver.find_element(id: 'password').send_keys user[:password]
    @driver.find_element(css: '#login button').click
    expect(notification_text).to start_with(user[:notification_message])
  end
end
