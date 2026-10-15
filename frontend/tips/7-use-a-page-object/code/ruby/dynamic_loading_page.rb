require 'selenium-webdriver'
require 'rspec/expectations'
include RSpec::Matchers

class DynamicLoadingPage
  URL = 'https://the-internet.herokuapp.com/dynamic_loading/2'
  START_BUTTON = { css: '#start button' }
  FINISH_TEXT = { id: 'finish' }

  attr_reader :driver

  def initialize(driver)
    @driver = driver
    driver.get URL
    verify_page
  end

  def start
    driver.find_element(START_BUTTON).click
  end

  def wait_for_finish(timeout = 10)
    Selenium::WebDriver::Wait.new(timeout: timeout).until { driver.find_element(FINISH_TEXT).displayed? }
  end

  def finish_text
    driver.find_element(FINISH_TEXT).text
  end

  private

  def verify_page
    expect(driver.title).to eql('The Internet')
  end
end
