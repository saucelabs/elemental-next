require 'selenium-webdriver'
require 'rspec/expectations'
include RSpec::Matchers

def setup
  @driver = Selenium::WebDriver.for(:firefox)
  @driver.get 'https://the-internet.herokuapp.com/tables'
end

def teardown
  @driver.quit
end

def run
  setup
  yield
  teardown
end

def dues(locator)
  @driver.find_elements(css: locator).map { |due| due.text.delete('$').to_f }
end

# Sort a number column in ascending order
run do
  @driver.find_element(css: '#table1 thead tr th:nth-of-type(4)').click
  due_values = dues('#table1 tbody tr td:nth-of-type(4)')
  expect(due_values).to eql due_values.sort
end

# Sort a number column in descending order
run do
  @driver.find_element(css: '#table1 thead tr th:nth-of-type(4)').click
  @driver.find_element(css: '#table1 thead tr th:nth-of-type(4)').click
  due_values = dues('#table1 tbody tr td:nth-of-type(4)')
  expect(due_values).to eql due_values.sort.reverse
end

# Sort a text column in ascending order
run do
  @driver.find_element(css: '#table1 thead tr th:nth-of-type(3)').click
  email_values = @driver.find_elements(css: '#table1 tbody tr td:nth-of-type(3)').map(&:text)
  expect(email_values).to eql email_values.sort
end

# Sort a number column in ascending order, with semantic locators
run do
  @driver.find_element(css: '#table2 thead .dues').click
  due_values = dues('#table2 tbody .dues')
  expect(due_values).to eql due_values.sort
end
