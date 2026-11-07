require 'json'
require 'net/http'
require 'securerandom'
require 'selenium-webdriver'
require 'rspec/expectations'
include RSpec::Matchers

BASE_URL = 'https://the-internet.herokuapp.com'
PASSWORD = 'SuperSecret123'

def post(path, username)
  Net::HTTP.post(URI("#{BASE_URL}#{path}"), { username: username, password: PASSWORD }.to_json,
                 'Content-Type' => 'application/json')
end

def setup
  # A unique name, so tests that run at the same time don't share a user
  @user = "user-#{SecureRandom.hex(6)}"
  response = post('/api/users', @user)
  expect(response.code).to eql('201')
  @driver = Selenium::WebDriver.for :chrome
end

def teardown
  @driver&.quit
  uri = URI("#{BASE_URL}/api/users/#{@user}")
  Net::HTTP.start(uri.host, uri.port, use_ssl: true) { |http| http.delete(uri.path) }
end

def run
  setup
  yield
ensure
  teardown
end

def logged_in_user
  wait = Selenium::WebDriver::Wait.new(timeout: 5)
  wait.until { @driver.find_element(css: 'span#username').displayed? }
  @driver.find_element(css: 'span#username').text
end

# Logs in with a new user
run do
  @driver.get "#{BASE_URL}/login"
  @driver.find_element(id: 'username').send_keys @user
  @driver.find_element(id: 'password').send_keys PASSWORD
  @driver.find_element(css: "button[type='submit']").click
  expect(logged_in_user).to eql(@user)
end

# Skips the login form
run do
  response = post('/api/sessions', @user)
  expect(response.code).to eql('200')
  # The cookie header looks like "rack.session=<value>; path=/; ...", so we keep the value
  value = response['Set-Cookie'].split(';').first.split('=', 2).last
  # The browser accepts cookies only for the site it shows, so we open a page of the site first
  @driver.get "#{BASE_URL}/login"
  @driver.manage.add_cookie(name: 'rack.session', value: value)
  @driver.get "#{BASE_URL}/secure"
  expect(logged_in_user).to eql(@user)
end
