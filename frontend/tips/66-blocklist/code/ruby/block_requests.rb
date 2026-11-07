require 'selenium-webdriver'
require 'rspec/expectations'
include RSpec::Matchers

SLOW_REQUEST = 'https://the-internet.herokuapp.com/slow_external'.freeze

def setup
  options = Selenium::WebDriver::Options.chrome
  # Turns on WebDriver BiDi, which lets the test intercept network requests
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
  blocked = []
  @driver.network.add_request_handler(SLOW_REQUEST, pattern_type: :string) do |request|
    # The handler sees every request, so it fails only the slow one
    url = request.request['url']
    next unless url == SLOW_REQUEST

    blocked << url
    request.fail
  end

  @driver.get 'https://the-internet.herokuapp.com/slow'
  # jQuery.active counts the requests that are still running. The slow request takes 30 seconds,
  # so it reaches 0 in time only when the request is blocked.
  wait = Selenium::WebDriver::Wait.new(timeout: 5)
  wait.until { @driver.execute_script('return jQuery.active').zero? }
  expect(blocked).to eql([SLOW_REQUEST])
end
