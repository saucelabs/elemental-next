require 'selenium-webdriver'
require 'rspec/expectations'
require 'tmpdir'
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
  # Asks Sauce Labs to keep the files the browser downloads, so we can fetch them
  options.enable_downloads = true
  options.add_option('sauce:options', username: ENV['SAUCE_USERNAME'],
                                      access_key: ENV['SAUCE_ACCESS_KEY'],
                                      name: 'Elemental Selenium - Tip 28 - Ruby')
  @driver = Selenium::WebDriver.for(:remote, url: SAUCE_URL, options: options)
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
  @driver.get 'https://the-internet.herokuapp.com/download'
  link = @driver.find_element(css: '.example a')
  file_name = link.text
  link.click

  # The file is downloaded on the remote machine, so we ask for the list of files
  wait = Selenium::WebDriver::Wait.new(timeout: 10)
  wait.until { @driver.downloadable_files.include?(file_name) }

  # Copies the file from the remote machine to a folder on this machine
  Dir.mktmpdir do |target_dir|
    @driver.download_file(file_name, target_dir)
    expect(File.size(File.join(target_dir, file_name))).to be > 0
  end
end
