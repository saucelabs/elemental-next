import pytest
from selenium import webdriver
from selenium.webdriver.common.by import By


@pytest.fixture
def driver():
    driver = webdriver.Firefox()
    yield driver
    driver.quit()


def retry_if_message_contains(fail_message, action, attempts=10):
    message = action()
    for _ in range(attempts - 1):
        if fail_message not in message:
            break
        message = action()
    return message


def test_notification_message(driver):
    def load_notification_message():
        driver.get('https://the-internet.herokuapp.com/notification_message')
        return driver.find_element(By.ID, 'flash').text

    message = retry_if_message_contains('please try again', load_notification_message)
    assert 'Action successful' in message
