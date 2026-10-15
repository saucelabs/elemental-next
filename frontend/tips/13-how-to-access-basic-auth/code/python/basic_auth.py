import pytest
from selenium import webdriver
from selenium.webdriver.common.by import By

MESSAGE = 'Congratulations! You must have the proper credentials.'


@pytest.fixture
def driver():
    driver = webdriver.Firefox()
    yield driver
    driver.quit()


def test_credentials_in_url(driver):
    driver.get('https://admin:admin@the-internet.herokuapp.com/basic_auth')
    page_message = driver.find_element(By.CSS_SELECTOR, '.example p').text
    assert page_message == MESSAGE


def test_credentials_cached_by_the_browser(driver):
    driver.get('https://admin:admin@the-internet.herokuapp.com/basic_auth')
    driver.get('https://the-internet.herokuapp.com/basic_auth')
    page_message = driver.find_element(By.CSS_SELECTOR, '.example p').text
    assert page_message == MESSAGE
