require 'selenium-webdriver'
require 'rspec/expectations'
include RSpec::Matchers

# The Navigation Timing API of the browser measures each step of the page load, in milliseconds
TIMINGS = <<~JS.freeze
  const timing = performance.getEntriesByType('navigation')[0];
  return {
    firstByte: Math.round(timing.responseStart),
    domReady: Math.round(timing.domContentLoadedEventEnd),
    load: Math.round(timing.loadEventEnd),
  };
JS
LOAD_BUDGET_MS = 10_000

def setup
  @driver = Selenium::WebDriver.for :chrome
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
  @driver.get 'https://the-internet.herokuapp.com'
  timings = @driver.execute_script(TIMINGS)
  puts "First byte: #{timings['firstByte']} ms, DOM ready: #{timings['domReady']} ms, load: #{timings['load']} ms"

  # The load is 0 until the page has finished loading
  expect(timings['load']).to be_positive
  expect(timings['load']).to be < LOAD_BUDGET_MS
end
