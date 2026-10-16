import csv
import os
import pytest
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.support.ui import WebDriverWait


def user_data():
    path = os.path.join(os.path.dirname(__file__), 'user_data.csv')
    with open(path, newline='') as file:
        return list(csv.DictReader(file))


@pytest.fixture
def driver():
    driver = webdriver.Firefox()
    yield driver
    driver.quit()


def notification_text(driver):
    flash = WebDriverWait(driver, 5).until(EC.visibility_of_element_located((By.ID, 'flash')))
    return flash.text


@pytest.mark.parametrize('user', user_data(), ids=lambda user: user['account_type'])
def test_login(driver, user):
    driver.get('https://the-internet.herokuapp.com/login')
    driver.find_element(By.ID, 'username').send_keys(user['username'])
    driver.find_element(By.ID, 'password').send_keys(user['password'])
    driver.find_element(By.CSS_SELECTOR, '#login button').click()
    assert notification_text(driver).startswith(user['notification_message'])
