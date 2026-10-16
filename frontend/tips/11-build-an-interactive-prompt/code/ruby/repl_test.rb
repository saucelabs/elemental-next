require 'selenium-webdriver'
require 'rspec/expectations'
require 'stringio'
require_relative 'repl'
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
  input = StringIO.new(<<~COMMANDS)
    driver.get 'https://the-internet.herokuapp.com'
    driver.title
    driver.find_element(id: 'does-not-exist')
    q
  COMMANDS
  output = StringIO.new

  run_repl(@driver, input: input, output: output)

  lines = output.string.split('>> ').map(&:strip).reject(&:empty?)
  expect(lines[0]).to eql('The Internet')
  expect(lines[1]).to start_with('Selenium::WebDriver::Error::NoSuchElementError')
  expect(lines[2]).to eql('Quitting...')
end
