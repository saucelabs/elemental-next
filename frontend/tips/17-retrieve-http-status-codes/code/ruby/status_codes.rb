require 'selenium-webdriver'
require 'rspec/expectations'
include RSpec::Matchers

STATUS_CODE_SCRIPT = "return performance.getEntriesByType('navigation')[0].responseStatus"

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

def status_code
  @driver.execute_script(STATUS_CODE_SCRIPT)
end

[200, 301, 404, 500].each do |expected|
  run do
    @driver.get "https://the-internet.herokuapp.com/status_codes/#{expected}"
    expect(status_code).to eql expected
  end
end
