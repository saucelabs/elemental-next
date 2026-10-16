import pytest
from selenium import webdriver
from selenium.common.exceptions import NoSuchElementException, StaleElementReferenceException
from selenium.webdriver.common.by import By
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.support.ui import WebDriverWait


@pytest.fixture
def driver():
    driver = webdriver.Firefox()
    driver.get('https://the-internet.herokuapp.com/login')
    driver.find_element(By.ID, 'username').send_keys('tomsmith')
    driver.find_element(By.ID, 'password').send_keys('SuperSecretPassword!')
    driver.find_element(By.CSS_SELECTOR, '#login button').click()
    WebDriverWait(driver, 10).until(EC.visibility_of_element_located((By.CSS_SELECTOR, '.flash.success')))
    yield driver
    driver.quit()


def is_displayed(driver, *locator):
    try:
        return driver.find_element(*locator).is_displayed()
    except (NoSuchElementException, StaleElementReferenceException):
        return False


def test_looking_for_a_missing_element_raises_an_exception(driver):
    with pytest.raises(NoSuchElementException):
        driver.find_element(By.ID, 'login').is_displayed()


def test_login_form_is_not_displayed(driver):
    assert not is_displayed(driver, By.ID, 'login')
