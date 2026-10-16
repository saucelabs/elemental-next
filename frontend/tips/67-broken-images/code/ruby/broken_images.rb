require 'selenium-webdriver'
require 'rspec/expectations'
require 'net/http'
include RSpec::Matchers

LOADED_SCRIPT = 'return arguments[0].complete && typeof arguments[0].naturalWidth != "undefined" ' \
                '&& arguments[0].naturalWidth > 0'

def setup
  @driver = Selenium::WebDriver.for(:firefox)
  @driver.get 'https://the-internet.herokuapp.com/broken_images'
  @all_images = @driver.find_elements(tag_name: 'img')
end

def teardown
  @driver.quit
end

def run
  setup
  yield
  teardown
end

# With an HTTP library
run do
  sources = @all_images.map { |image| image.attribute('src') }
  broken_images = sources.reject { |source| Net::HTTP.get_response(URI(source)).code == '200' }
  puts broken_images
  expect(broken_images.map { |source| File.basename(source) }).to eql %w[asdf.jpg hjkl.jpg]
end

# With JavaScript
run do
  broken_images = @all_images.reject { |image| @driver.execute_script(LOADED_SCRIPT, image) }
  sources = broken_images.map { |image| image.dom_attribute('src') }
  puts sources
  expect(sources).to eql %w[asdf.jpg hjkl.jpg]
end
