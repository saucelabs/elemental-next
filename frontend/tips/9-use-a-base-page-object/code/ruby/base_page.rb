require 'selenium-webdriver'

class BasePage
  BASE_URL = 'https://the-internet.herokuapp.com'

  attr_reader :driver

  def initialize(driver)
    @driver = driver
  end

  def visit(path = '/')
    driver.get(BASE_URL + path)
  end

  def find(locator)
    driver.find_element(locator)
  end

  def click_on(locator)
    find(locator).click
  end

  def type(locator, text)
    find(locator).clear
    find(locator).send_keys(text)
  end

  def displayed?(locator)
    find(locator).displayed?
  rescue Selenium::WebDriver::Error::NoSuchElementError
    false
  end

  def text_of(locator)
    find(locator).text
  end

  def title
    driver.title
  end

  def wait_for(locator, timeout = 10)
    Selenium::WebDriver::Wait.new(timeout: timeout).until { displayed?(locator) }
  end
end
