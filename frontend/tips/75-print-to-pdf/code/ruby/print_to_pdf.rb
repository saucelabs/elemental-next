require 'base64'
require 'tmpdir'
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
ensure
  teardown
end

run do
  @driver.get 'https://the-internet.herokuapp.com/tables'

  pdf = Base64.decode64(@driver.print_page(orientation: 'landscape'))

  # Every PDF file starts with %PDF-
  expect(pdf[0, 5]).to eql('%PDF-')
  path = File.join(Dir.mktmpdir, 'tables.pdf')
  File.binwrite(path, pdf)
  puts "Saved #{path}"
end
