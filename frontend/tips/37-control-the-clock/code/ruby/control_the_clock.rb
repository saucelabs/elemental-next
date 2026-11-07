require 'selenium-webdriver'
require 'rspec/expectations'
include RSpec::Matchers

# Replaces setTimeout with a fake one: its callbacks run only when the test moves the clock with fakeClock.tick
FAKE_CLOCK = <<~JS.freeze
  () => {
    let now = 0;
    const timers = [];
    window.setTimeout = (callback, delay = 0) => timers.push({time: now + delay, callback});
    window.fakeClock = {
      tick: (milliseconds) => {
        now += milliseconds;
        timers.filter((timer) => !timer.done && timer.time <= now).forEach((timer) => {
          timer.done = true;
          timer.callback();
        });
      },
    };
  }
JS

def setup
  options = Selenium::WebDriver::Options.chrome
  # Turns on WebDriver BiDi, which lets the test add a script that runs before the page's scripts
  options.web_socket_url = true
  @driver = Selenium::WebDriver.for(:chrome, options: options)
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

run do
  script = Selenium::WebDriver::BiDi::Protocol::Script.new(@driver)
  script.add_preload_script(function_declaration: FAKE_CLOCK)

  @driver.get 'https://the-internet.herokuapp.com/toasts?duration=60000'
  @driver.find_element(id: 'success-toast').click
  expect(@driver.find_element(class: 'toast-message').text).to eql('Saved successfully')

  @driver.execute_script('fakeClock.tick(59000)')
  expect(@driver.find_elements(class: 'toast').size).to eql(1)

  @driver.execute_script('fakeClock.tick(1000)')
  expect(@driver.find_elements(class: 'toast').size).to eql(0)
end
