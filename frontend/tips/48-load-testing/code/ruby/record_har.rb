require 'json'
require 'time'
require 'selenium-webdriver'
require 'rspec/expectations'
include RSpec::Matchers

BASE_URL = 'https://the-internet.herokuapp.com'
HAR_FILE = 'journey.har'

def setup
  options = Selenium::WebDriver::Options.chrome
  # Turns on WebDriver BiDi, which sends every request of the browser to the test
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
  entries = []
  network = Selenium::WebDriver::BiDi::Network.new(@driver.bidi)
  network.on(:before_request) do |event|
    request = event['request']
    # Keeps only the requests to the site under test, not the ones to third parties
    if request['url'].start_with?(BASE_URL)
      entries << {
        startedDateTime: Time.at(event['timestamp'] / 1000.0).utc.iso8601(3),
        request: { method: request['method'], url: request['url'] }
      }
    end
  end

  @driver.get BASE_URL
  @driver.find_element(link_text: 'Dynamic Loading').click
  @driver.find_element(partial_link_text: 'Example 2').click
  @driver.find_element(css: '#start button').click
  wait = Selenium::WebDriver::Wait.new(timeout: 10)
  wait.until { @driver.find_element(id: 'finish').displayed? }
  expect(@driver.find_element(id: 'finish').text).to eql('Hello World!')

  har = { log: { version: '1.2', creator: { name: 'Elemental Selenium', version: '1.0' }, entries: entries } }
  File.write(HAR_FILE, JSON.pretty_generate(har))

  urls = entries.map { |entry| entry[:request][:url] }
  pages = ['/', '/dynamic_loading', '/dynamic_loading/2'].map { |page| BASE_URL + page }
  expect(pages - urls).to be_empty
end
