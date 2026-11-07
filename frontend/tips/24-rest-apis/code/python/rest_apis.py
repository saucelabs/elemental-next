import uuid

import pytest
import requests
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.support.ui import WebDriverWait

BASE_URL = 'https://the-internet.herokuapp.com'
PASSWORD = 'SuperSecret123'


@pytest.fixture
def driver():
    driver = webdriver.Chrome()
    yield driver
    driver.quit()


@pytest.fixture
def user():
    # A unique name, so tests that run at the same time don't share a user
    username = f'user-{uuid.uuid4().hex[:12]}'
    response = requests.post(f'{BASE_URL}/api/users', json={'username': username, 'password': PASSWORD})
    assert response.status_code == 201
    yield username
    requests.delete(f'{BASE_URL}/api/users/{username}')


def logged_in_user(driver):
    wait = WebDriverWait(driver, 5)
    return wait.until(EC.visibility_of_element_located((By.CSS_SELECTOR, 'span#username'))).text


def test_log_in_with_a_new_user(driver, user):
    driver.get(f'{BASE_URL}/login')
    driver.find_element(By.ID, 'username').send_keys(user)
    driver.find_element(By.ID, 'password').send_keys(PASSWORD)
    driver.find_element(By.CSS_SELECTOR, 'button[type="submit"]').click()
    assert logged_in_user(driver) == user


def test_skip_the_login_form(driver, user):
    response = requests.post(f'{BASE_URL}/api/sessions', json={'username': user, 'password': PASSWORD})
    assert response.status_code == 200
    # The browser accepts cookies only for the site it shows, so we open a page of the site first
    driver.get(f'{BASE_URL}/login')
    driver.add_cookie({'name': 'rack.session', 'value': response.cookies['rack.session']})
    driver.get(f'{BASE_URL}/secure')
    assert logged_in_user(driver) == user
