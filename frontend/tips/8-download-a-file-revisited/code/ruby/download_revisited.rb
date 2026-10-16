require 'selenium-webdriver'
require 'rspec/expectations'
require 'net/http'
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

run do
  @driver.get 'https://the-internet.herokuapp.com/download'
  link = @driver.find_element(css: '.example a').attribute('href')

  uri = URI(link)
  response = Net::HTTP.start(uri.host, uri.port, use_ssl: uri.scheme == 'https') do |http|
    http.head(uri.path)
  end

  expect(response['Content-Type']).to eql('application/octet-stream')
  expect(response['Content-Length'].to_i).to be > 0
end
