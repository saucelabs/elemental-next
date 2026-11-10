import uuid

import pytest
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.support.ui import WebDriverWait

# A random room, so tests running at the same time don't see each other's messages
CHAT_URL = f'https://the-internet.herokuapp.com/chat?room=elemental-{uuid.uuid4().hex[:8]}'


@pytest.fixture
def driver():
    options = webdriver.FirefoxOptions()
    # Turns on WebDriver BiDi, which lets the test create user contexts
    options.enable_bidi = True
    driver = webdriver.Firefox(options=options)
    yield driver
    driver.quit()


def new_user_window(driver):
    # A user context has its own cookies and storage, like a fresh browser profile
    user_context = driver.browser.create_user_context()
    return driver.browsing_context.create(type='window', user_context=user_context)


def wait_for_text(driver, element_id, text):
    WebDriverWait(driver, 10).until(EC.text_to_be_present_in_element((By.ID, element_id), text))


def join(driver, name):
    driver.get(CHAT_URL)
    wait_for_text(driver, 'status', 'Connected')
    driver.find_element(By.ID, 'name').send_keys(name)
    driver.find_element(By.ID, 'join').click()


def send_message(driver, text):
    driver.find_element(By.ID, 'message').send_keys(text)
    driver.find_element(By.ID, 'send').click()


def test_two_users_chat(driver):
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
