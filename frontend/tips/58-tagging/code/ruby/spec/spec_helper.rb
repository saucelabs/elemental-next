require 'selenium-webdriver'

RSpec.configure do |config|
  config.before(:each) do
    @driver = Selenium::WebDriver.for(:firefox)
  end

  config.after(:each) do
    @driver.quit
  end
end
