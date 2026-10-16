require 'selenium-webdriver'
require 'rspec/expectations'
require 'net/http'
include RSpec::Matchers

GRID_URL = ENV.fetch('GRID_URL', 'http://localhost:4444')

def grid_running?
  Net::HTTP.get_response(URI("#{GRID_URL}/status")).is_a?(Net::HTTPSuccess)
rescue StandardError
  false
end

unless grid_running?
  puts "Start a Selenium Grid on #{GRID_URL} (or set GRID_URL) to run this test"
  exit 0
end

def setup
  @driver = Selenium::WebDriver.for(:remote, url: GRID_URL, options: Selenium::WebDriver::Options.firefox)
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
  @driver.get 'https://the-internet.herokuapp.com'
  expect(@driver.title).to eql('The Internet')
end
