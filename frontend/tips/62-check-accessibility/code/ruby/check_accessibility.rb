require 'axe/core'
require 'axe/api/run'
require 'selenium-webdriver'
require 'rspec/expectations'
include RSpec::Matchers

# Rules the page breaks on purpose
KNOWN_ISSUES = %w[image-alt label select-name button-name link-name aria-roles heading-order].freeze

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

def scan
  # Checks only the part of the page with the examples
  audit = Axe::Core.new(@driver).call(Axe::API::Run.new.within('#widgets'))
  audit.results.violations.map { |violation| violation.id.to_s }
end

# The page has the known issues
run do
  @driver.get 'https://the-internet.herokuapp.com/accessibility_issues'

  # No known issue is missing from the scan
  expect(KNOWN_ISSUES - scan).to be_empty
end

# The fixed page has no issues
run do
  @driver.get 'https://the-internet.herokuapp.com/accessibility_issues?fixed=true'

  expect(scan).to be_empty
end
