require 'selenium-webdriver'

RSpec.configure do |config|
  # RSpec stores the status of each example here, which is what --only-failures reads.
  config.example_status_persistence_file_path = 'examples.txt'

  config.before(:each) do
    @driver = Selenium::WebDriver.for(:firefox)
  end

  config.after(:each) do
    @driver.quit
  end
end
