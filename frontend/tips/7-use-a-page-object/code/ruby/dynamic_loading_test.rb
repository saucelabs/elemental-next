require 'selenium-webdriver'
require 'rspec/expectations'
require_relative 'dynamic_loading_page'
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
  dynamic_loading = DynamicLoadingPage.new(@driver)
  dynamic_loading.start
  dynamic_loading.wait_for_finish
  expect(dynamic_loading.finish_text).to eql('Hello World!')
end
