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
  @driver.get 'https://the-internet.herokuapp.com/hovers'
  an_avatar = @driver.find_element(class: 'figure')
  caption = an_avatar.find_element(class: 'figcaption')
  expect(caption.displayed?).to eql false

  @driver.action.move_to(an_avatar).perform
  expect(caption.displayed?).to eql true
end
