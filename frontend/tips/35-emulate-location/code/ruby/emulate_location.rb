require 'selenium-webdriver'
require 'rspec/expectations'
include RSpec::Matchers

def setup
  options = Selenium::WebDriver::Options.chrome
  # Turns on WebDriver BiDi, which lets the test change what the browser reports
  options.web_socket_url = true
  @driver = Selenium::WebDriver.for(:chrome, options: options)
  @emulation = Selenium::WebDriver::BiDi::Protocol::Emulation.new(@driver)
  @tab = [@driver.window_handle]
end

def teardown
  @driver.quit
end

def run
  setup
  yield
ensure
  teardown
end

# Geolocation
run do
  permissions = Selenium::WebDriver::BiDi::Protocol::Permissions.new(@driver)
  geolocation = permissions.permission_descriptor(name: 'geolocation')
  permissions.set_permission(descriptor: geolocation, state: :granted, origin: 'https://the-internet.herokuapp.com')
  berlin = @emulation.geolocation_coordinates(latitude: 52.52, longitude: 13.405)
  @emulation.set_geolocation_override(coordinates: berlin, contexts: @tab)

  @driver.get 'https://the-internet.herokuapp.com/geolocation'
  @driver.find_element(tag_name: 'button').click
  wait = Selenium::WebDriver::Wait.new(timeout: 5)
  wait.until { @driver.find_element(id: 'lat-value') }
  expect(@driver.find_element(id: 'lat-value').text).to eql('52.52')
  expect(@driver.find_element(id: 'long-value').text).to eql('13.405')
end

# Time zone and locale
run do
  @emulation.set_timezone_override(timezone: 'Asia/Tokyo', contexts: @tab)
  @emulation.set_locale_override(locale: 'de-DE', contexts: @tab)

  @driver.get 'https://the-internet.herokuapp.com/locale'
  expect(@driver.find_element(id: 'browser-timezone').text).to eql('Asia/Tokyo')
  expect(@driver.find_element(id: 'browser-language').text).to eql('de-DE')
  expect(@driver.find_element(id: 'formatted-date').text).to eql('Mittwoch, 15. April 2026 um 21:00')
  expect(@driver.find_element(id: 'formatted-number').text).to eql('1.234.567,891')
  expect(@driver.find_element(id: 'greeting').text).to eql('Hallo!')
end
