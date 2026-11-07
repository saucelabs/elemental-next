require 'json'
require 'selenium-webdriver'
require 'rspec/expectations'
include RSpec::Matchers

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
  network = Selenium::WebDriver::BiDi::Network.new(@driver.bidi)
  # Pauses the calls to /slow_api/data, with any query string
  api = {type: 'pattern', hostname: 'the-internet.herokuapp.com', pathname: '/slow_api/data'}
  @driver.bidi.send_cmd('network.addIntercept', phases: ['beforeRequestSent'], urlPatterns: [api])
  network.on(:before_request) do |event|
    next unless event['isBlocked']

    network.provide_response(
      id: event['request']['request'],
      status: 200,
      headers: [{name: 'Content-Type', value: {type: 'string', value: 'application/json'}}],
      body: {type: 'string', value: {message: 'Hello from the mock'}.to_json}
    )
  end

  @driver.get 'https://the-internet.herokuapp.com/slow_api'
  @driver.find_element(id: 'call-api').click
  wait = Selenium::WebDriver::Wait.new(timeout: 5)
  wait.until { @driver.find_element(id: 'status-text').text == 'Hello from the mock' }
  expect(@driver.find_element(css: '#attempts li').text).to eql('200: Hello from the mock')
end
