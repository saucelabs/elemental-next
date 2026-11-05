require 'selenium-webdriver'
require 'rspec/expectations'
include RSpec::Matchers

def setup
  options = Selenium::WebDriver::Options.chrome
  # Runs Chrome without a window
  options.add_argument('--headless')
  @driver = Selenium::WebDriver.for(:chrome, options: options)
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

  user_agent = @driver.execute_script('return navigator.userAgent')
  puts user_agent
  expect(user_agent).to match(/HeadlessChrome/)
end
