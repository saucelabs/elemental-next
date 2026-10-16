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

def wait_for(seconds = 10)
  Selenium::WebDriver::Wait.new(timeout: seconds).until { yield }
end

run do
  @driver.get 'https://the-internet.herokuapp.com'

  # Step 1: check for jQuery on the page, add it if need be
  @driver.execute_script(
    "if (!window.jQuery) {
      var jquery = document.createElement('script');
      jquery.type = 'text/javascript';
      jquery.src = 'https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js';
      document.getElementsByTagName('head')[0].appendChild(jquery);
    }"
  )
  wait_for { @driver.execute_script('return !!window.jQuery') }

  # Step 2: use jQuery to add jquery-growl to the page
  @driver.execute_script("$.getScript('https://the-internet.herokuapp.com/js/vendor/jquery.growl.js')")

  # Step 3: use jQuery to add jquery-growl styles to the page
  @driver.execute_script("$('head').append('<link rel=\"stylesheet\" " \
                         "href=\"https://the-internet.herokuapp.com/css/jquery.growl.css\" type=\"text/css\" />');")
  wait_for { @driver.execute_script('return !!$.growl') }

  # Step 4: display a message with jquery-growl
  @driver.execute_script("$.growl({ title: 'GET', message: '/' });")

  wait_for { @driver.find_element(css: '#growls .growl').displayed? }
  notification = @driver.find_element(css: '#growls .growl')
  expect(notification.find_element(class: 'growl-title').text).to eql('GET')
  expect(notification.find_element(class: 'growl-message').text).to eql('/')
end
