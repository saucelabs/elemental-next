require 'chunky_png'
require 'selenium-webdriver'
require 'rspec/expectations'
include RSpec::Matchers

URL = 'https://the-internet.herokuapp.com/visual_diff'.freeze

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

def card_screenshot(url)
  @driver.get url
  png = @driver.find_element(id: 'card').screenshot_as(:png)
  ChunkyPNG::Image.from_blob(png)
end

def different_pixels(image, other)
  # Images of different sizes differ everywhere
  return image.pixels.size unless image.width == other.width && image.height == other.height

  image.pixels.zip(other.pixels).count { |pixel, other_pixel| pixel != other_pixel }
end

# The same card has no differences
run do
  baseline = card_screenshot(URL)

  expect(different_pixels(baseline, card_screenshot(URL))).to eql(0)
end

# A moved button is noticed
run do
  baseline = card_screenshot(URL)

  expect(different_pixels(baseline, card_screenshot("#{URL}?shift=10"))).to be > 0
end
