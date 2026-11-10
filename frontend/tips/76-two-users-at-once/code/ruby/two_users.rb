require 'securerandom'
require 'selenium-webdriver'

# A random room, so tests running at the same time don't see each other's messages
CHAT_URL = "https://the-internet.herokuapp.com/chat?room=elemental-#{SecureRandom.hex(4)}".freeze

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
  alice = Selenium::WebDriver.for(:firefox)
  bob = Selenium::WebDriver.for(:firefox)

  join(alice, 'Alice')
  join(bob, 'Bob')
  # Messages are not saved: Alice waits until Bob is in the room before she writes
  wait_for_text(alice, 'messages', 'Bob joined')

  send_message(alice, 'Hi Bob')
  wait_for_text(bob, 'messages', 'Alice: Hi Bob')

  send_message(bob, 'Hi Alice')
  wait_for_text(alice, 'messages', 'Bob: Hi Alice')
ensure
  alice&.quit
  bob&.quit
end
