import pytest
from selenium import webdriver
from selenium.webdriver.common.by import By


@pytest.fixture
def driver():
    driver = webdriver.Firefox()
    yield driver
    driver.quit()


def option(driver, text):
    options = driver.find_elements(By.TAG_NAME, 'option')
    return next(option for option in options if option.text == text)


def test_disabled_option(driver):
    driver.get('https://the-internet.herokuapp.com/dropdown')
    assert not option(driver, 'Please select an option').is_enabled()
    assert option(driver, 'Option 1').is_enabled()
