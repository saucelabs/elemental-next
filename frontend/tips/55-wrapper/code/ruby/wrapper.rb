require 'selenium-webdriver'

class Wrapper < Selenium::WebDriver::Support::AbstractEventListener
  attr_reader :messages

  def initialize
    super
    @messages = []
  end

  def after_navigate_to(url, _driver)
    log "Navigated to #{url}"
  end

  def before_find(_by, what, _driver)
    log "Finding element #{what}"
  end

  def after_find(_by, what, _driver)
    log "Found element #{what}"
  end

  def before_click(element, driver)
    log "Clicking on #{element.text}"
    @pre_click_url = driver.current_url
  end

  def after_click(_element, driver)
    log "URL changed to #{driver.current_url}" unless @pre_click_url == driver.current_url
  end

  private

  def log(message)
    puts message
    @messages << message
  end
end
