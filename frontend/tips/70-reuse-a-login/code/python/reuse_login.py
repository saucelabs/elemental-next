import pytest
from selenium import webdriver
from selenium.webdriver.common.by import By

BASE_URL = 'https://the-internet.herokuapp.com'


@pytest.fixture(scope='module')
def session_cookie():
    # Logs in through the form once, and keeps the session cookie of the logged-in user
    driver = webdriver.Firefox()
    driver.get(f'{BASE_URL}/login')
    driver.find_element(By.ID, 'username').send_keys('tomsmith')
    driver.find_element(By.ID, 'password').send_keys('SuperSecretPassword!')
    driver.find_element(By.CSS_SELECTOR, 'button[type="submit"]').click()
    cookie = driver.get_cookie('rack.session')
    driver.quit()
    return cookie


@pytest.fixture
def driver(session_cookie):
    driver = webdriver.Firefox()
    # A cookie can only be added for the site of the current page
    driver.get(BASE_URL)
    driver.add_cookie({'name': session_cookie['name'], 'value': session_cookie['value']})
    yield driver
    driver.quit()


def test_the_secure_area_shows_the_user(driver):
    driver.get(f'{BASE_URL}/secure')

    assert driver.find_element(By.ID, 'username').text == 'tomsmith'


def test_log_out(driver):
    driver.get(f'{BASE_URL}/secure')
    driver.find_element(By.CSS_SELECTOR, 'a[href="/logout"]').click()

    assert 'You logged out of the secure area!' in driver.find_element(By.ID, 'flash').text
