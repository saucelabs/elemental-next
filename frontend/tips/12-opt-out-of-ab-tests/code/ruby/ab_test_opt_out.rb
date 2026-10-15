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
  yield
  teardown
end

# Forge the opt-out cookie on the target page
run do
  @driver.get 'https://the-internet.herokuapp.com/abtest'
  heading_text = @driver.find_element(tag_name: 'h3').text
  expect(heading_text).to match(/A\/B Test (Variation 1|Control)/)
  @driver.manage.add_cookie(name: 'optimizelyOptOut', value: 'true')
  @driver.navigate.refresh
  expect(@driver.find_element(tag_name: 'h3').text).to eql('No A/B Test')
end

# Forge the opt-out cookie before visiting the target page
run do
  @driver.get 'https://the-internet.herokuapp.com'
  @driver.manage.add_cookie(name: 'optimizelyOptOut', value: 'true')
  @driver.get 'https://the-internet.herokuapp.com/abtest'
  expect(@driver.find_element(tag_name: 'h3').text).to eql('No A/B Test')
end

# Append the opt-out parameter to the URL
run do
  @driver.get 'https://the-internet.herokuapp.com/abtest?optimizely_opt_out=true'
  wait = Selenium::WebDriver::Wait.new(timeout: 10)
  wait.until { @driver.switch_to.alert }.dismiss
  heading = wait.until { @driver.find_element(tag_name: 'h3') }
  expect(heading.text).to eql('No A/B Test')
end
