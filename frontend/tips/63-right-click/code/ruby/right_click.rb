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

run do
  @driver.get 'https://the-internet.herokuapp.com/context_menu'
  menu_area = @driver.find_element(id: 'hot-spot')
  @driver.action.context_click(menu_area).perform

  alert = Selenium::WebDriver::Wait.new(timeout: 5).until { @driver.switch_to.alert }
  expect(alert.text).to eql('You selected a context menu')
  alert.accept
end
