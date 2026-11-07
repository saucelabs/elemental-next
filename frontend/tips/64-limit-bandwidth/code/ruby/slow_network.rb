require 'selenium-webdriver'
require 'rspec/expectations'
include RSpec::Matchers

def setup
  @driver = Selenium::WebDriver.for :chrome
  # Every request waits half a second, downloads at 200 KB/s and uploads at 50 KB/s
  @driver.network_conditions = {
    latency: 500,
    download_throughput: 200 * 1024,
    upload_throughput: 50 * 1024
  }
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
  start = Process.clock_gettime(Process::CLOCK_MONOTONIC)
  @driver.get 'https://the-internet.herokuapp.com'
  seconds = Process.clock_gettime(Process::CLOCK_MONOTONIC) - start
  puts format('The page loaded in %.1f seconds', seconds)

  expect(@driver.find_element(css: '.heading').text).to eql('Welcome to the-internet')
  # On a fast connection, the page loads in 1 or 2 seconds
  expect(seconds).to be >= 3
end
