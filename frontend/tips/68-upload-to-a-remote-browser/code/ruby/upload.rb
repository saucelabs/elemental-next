require 'selenium-webdriver'
require 'rspec/expectations'
include RSpec::Matchers

SAUCE_URL = 'https://ondemand.us-west-1.saucelabs.com/wd/hub'

unless ENV['SAUCE_USERNAME'] && ENV['SAUCE_ACCESS_KEY']
  puts 'Set SAUCE_USERNAME and SAUCE_ACCESS_KEY to run this test on Sauce Labs'
  exit 0
end

def setup
  options = Selenium::WebDriver::Options.chrome
  options.browser_version = 'latest'
  options.platform_name = 'Windows 11'
  options.add_option('sauce:options', username: ENV['SAUCE_USERNAME'],
                                      access_key: ENV['SAUCE_ACCESS_KEY'],
                                      name: 'Elemental Selenium - Tip 68 - Ruby')
  @driver = Selenium::WebDriver.for(:remote, url: SAUCE_URL, options: options)
  # Sends the files typed in a file input to the remote machine (the default for remote drivers in Ruby)
  @driver.file_detector = ->((filename, *)) { File.exist?(filename) && filename.to_s }
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
  filename = 'some-file.txt'
  file = File.join(__dir__, filename)
  @driver.get 'https://the-internet.herokuapp.com/upload'
  @driver.find_element(id: 'file-upload').send_keys file
  @driver.find_element(id: 'file-submit').click
  expect(@driver.find_element(id: 'uploaded-files').text).to eql(filename)
end
