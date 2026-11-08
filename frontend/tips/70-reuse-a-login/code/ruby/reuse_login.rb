require 'selenium-webdriver'
require 'rspec/expectations'
include RSpec::Matchers

BASE_URL = 'https://the-internet.herokuapp.com'.freeze

# Logs in through the form once, and keeps the session cookie of the logged-in user
def log_in
  driver = Selenium::WebDriver.for(:firefox)
  driver.get "#{BASE_URL}/login"
  driver.find_element(id: 'username').send_keys('tomsmith')
  driver.find_element(id: 'password').send_keys('SuperSecretPassword!')
  driver.find_element(css: 'button[type="submit"]').click
  driver.manage.cookie_named('rack.session')
ensure
  driver.quit
end

def setup
  @driver = Selenium::WebDriver.for(:firefox)
  # A cookie can only be added for the site of the current page
  @driver.get BASE_URL
  @driver.manage.add_cookie(name: SESSION_COOKIE[:name], value: SESSION_COOKIE[:value])
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

SESSION_COOKIE = log_in

# The secure area shows the user
run do
  @driver.get "#{BASE_URL}/secure"

  expect(@driver.find_element(id: 'username').text).to eql('tomsmith')
end

# Log out
run do
  @driver.get "#{BASE_URL}/secure"
  @driver.find_element(css: 'a[href="/logout"]').click

  expect(@driver.find_element(id: 'flash').text).to match(/You logged out of the secure area!/)
end
