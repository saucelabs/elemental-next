import uuid

import pytest
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.support.ui import WebDriverWait

# A random room, so tests running at the same time don't see each other's messages
CHAT_URL = f'https://the-internet.herokuapp.com/chat?room=elemental-{uuid.uuid4().hex[:8]}'


@pytest.fixture
def alice():
    driver = webdriver.Firefox()
    yield driver
    driver.quit()


@pytest.fixture
def bob():
    driver = webdriver.Firefox()
    yield driver
    driver.quit()


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


def test_two_users_chat(alice, bob):
    join(alice, 'Alice')
    join(bob, 'Bob')
    # Messages are not saved: Alice waits until Bob is in the room before she writes
    wait_for_text(alice, 'messages', 'Bob joined')

    send_message(alice, 'Hi Bob')
    wait_for_text(bob, 'messages', 'Alice: Hi Bob')

    send_message(bob, 'Hi Alice')
    wait_for_text(alice, 'messages', 'Bob: Hi Alice')
