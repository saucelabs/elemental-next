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
  @driver.get 'https://the-internet.herokuapp.com/drag_and_drop'
  dnd_javascript = File.read(File.join(__dir__, 'dnd.js'))
  @driver.execute_script(dnd_javascript + "$('#column-a').simulateDragDrop({ dropTarget: '#column-b'});")
  expect(@driver.find_element(id: 'column-a').text).to eql('B')
  expect(@driver.find_element(id: 'column-b').text).to eql('A')
end
