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
ensure
  teardown
end

def find_by_role(role, name)
  # The browser computes the role and the accessible name of each element, as a screen reader sees them
  element = @driver.find_elements(css: "[role=\"#{role}\"]").find do |candidate|
    candidate.aria_role == role && candidate.accessible_name == name
  end
  element || raise("No #{role} named \"#{name}\"")
end

run do
  @driver.get 'https://the-internet.herokuapp.com/custom_dropdown'

  find_by_role('combobox', 'Fruit').click
  find_by_role('option', 'Mango').click

  expect(find_by_role('combobox', 'Fruit').text).to eql('Mango')
  expect(@driver.find_element(id: 'result').text).to eql('Selected: mango')
end
