require 'selenium-webdriver'
require 'rspec/expectations'
include RSpec::Matchers

def setup
  @driver = Selenium::WebDriver.for(:firefox)
end

def teardown
  @driver.quit
end

def run
  setup
  begin
    yield
  rescue RSpec::Expectations::ExpectationNotMetError => e
    puts e.message
    @driver.save_screenshot("./#{Time.now.strftime('failshot_%Y_%m_%d__%H_%M_%S')}.png")
    raise
  ensure
    teardown
  end
end

run do
  @driver.get 'https://the-internet.herokuapp.com'
  expect(@driver.find_element(css: 'h1').text).to eql 'blah blah blah'
end
