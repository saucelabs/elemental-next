import pytest
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.support.ui import WebDriverWait


@pytest.fixture
def driver():
    driver = webdriver.Firefox()
    driver.get('https://the-internet.herokuapp.com/javascript_alerts')
    driver.find_elements(By.CSS_SELECTOR, 'button')[1].click()
    yield driver
    driver.quit()


def test_accept_confirmation(driver):
    popup = WebDriverWait(driver, 5).until(EC.alert_is_present())
    popup.accept()
    assert driver.find_element(By.ID, 'result').text == 'You clicked: Ok'


def test_dismiss_confirmation(driver):
    popup = WebDriverWait(driver, 5).until(EC.alert_is_present())
    popup.dismiss()
    assert driver.find_element(By.ID, 'result').text == 'You clicked: Cancel'
