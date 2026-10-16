import pytest
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.events import EventFiringWebDriver
from wrapper import Wrapper


@pytest.fixture
def listener():
    return Wrapper()


@pytest.fixture
def driver(listener):
    driver = EventFiringWebDriver(webdriver.Firefox(), listener)
    yield driver
    driver.quit()


def test_listener_logs_every_action(driver, listener):
    driver.get('https://the-internet.herokuapp.com')
    driver.find_element(By.LINK_TEXT, 'Checkboxes').click()

    assert listener.messages == [
        'Navigated to https://the-internet.herokuapp.com',
        'Finding element Checkboxes',
        'Found element Checkboxes',
        'Clicking on Checkboxes',
        'URL changed to https://the-internet.herokuapp.com/checkboxes',
    ]
