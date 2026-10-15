require 'selenium-webdriver'
require 'rspec/expectations'
require_relative 'dynamic_loading_page'
require_relative 'login_page'
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
  expect(dynamic_loading.finish_text).to eql('Hello World!')
end

run do
  login = LoginPage.new(@driver)
  login.login_as('tomsmith', 'SuperSecretPassword!')
  expect(login.success_message_present?).to be true
end
