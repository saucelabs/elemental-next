require 'selenium-webdriver'
require 'rspec/expectations'
require 'net/http'
include RSpec::Matchers

HOST = 'the-internet.herokuapp.com'

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

def request(http_request)
  Net::HTTP.start(HOST, 443, use_ssl: true) { |http| http.request(http_request) }
end

# Files behind Basic Auth
run do
  @driver.get "https://admin:admin@#{HOST}/download_secure"
  link = @driver.find_element(css: '.example a').dom_attribute('href')

  # The file names can have spaces and other characters that need to be encoded in a URL.
  head = Net::HTTP::Head.new(URI::RFC2396_PARSER.escape("/#{link}"))
  head.basic_auth('admin', 'admin')
  expect(request(head).code).to eql('200')
end

# Page behind a form login
run do
  @driver.get "https://#{HOST}/login"
  @driver.find_element(id: 'username').send_keys('tomsmith')
  @driver.find_element(id: 'password').send_keys('SuperSecretPassword!')
  @driver.find_element(css: '#login button').click
  wait = Selenium::WebDriver::Wait.new(timeout: 10)
  wait.until { @driver.find_element(css: '.flash.success').displayed? }

  cookie = @driver.manage.cookie_named('rack.session')
  get = Net::HTTP::Get.new('/secure')
  get['Cookie'] = "#{cookie[:name]}=#{cookie[:value]}"
  expect(request(get).code).to eql('200')

  expect(request(Net::HTTP::Get.new('/secure')).code).to eql('302')
end
