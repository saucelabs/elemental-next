require 'securerandom'
require 'selenium-webdriver'

# A random room, so tests running at the same time don't see each other's messages
CHAT_URL = "https://the-internet.herokuapp.com/chat?room=elemental-#{SecureRandom.hex(4)}".freeze

# A user context has its own cookies and storage, like a fresh browser profile
def new_user_window(driver)
  user_context = driver.bidi.send_cmd('browser.createUserContext')['userContext']
  driver.bidi.send_cmd('browsingContext.create', type: 'window', userContext: user_context)['context']
end

def wait_for_text(driver, id, text)
  wait = Selenium::WebDriver::Wait.new(timeout: 10)
  wait.until { driver.find_element(id: id).text.include?(text) }
end

def join(driver, name)
  driver.get CHAT_URL
  wait_for_text(driver, 'status', 'Connected')
  driver.find_element(id: 'name').send_keys(name)
  driver.find_element(id: 'join').click
end

def send_message(driver, text)
  driver.find_element(id: 'message').send_keys(text)
  driver.find_element(id: 'send').click
end

begin
  options = Selenium::WebDriver::Options.firefox
  # Turns on WebDriver BiDi, which lets the test create user contexts
  options.web_socket_url = true
  driver = Selenium::WebDriver.for(:firefox, options: options)

  alice = new_user_window(driver)
  bob = new_user_window(driver)

  driver.switch_to.window(alice)
  join(driver, 'Alice')
  driver.switch_to.window(bob)
  join(driver, 'Bob')

  # Messages are not saved: Alice waits until Bob is in the room before she writes
  driver.switch_to.window(alice)
  wait_for_text(driver, 'messages', 'Bob joined')
  send_message(driver, 'Hi Bob')

  driver.switch_to.window(bob)
  wait_for_text(driver, 'messages', 'Alice: Hi Bob')
  send_message(driver, 'Hi Alice')

  driver.switch_to.window(alice)
  wait_for_text(driver, 'messages', 'Bob: Hi Alice')
ensure
  driver&.quit
end
