import pytest
from selenium import webdriver
from selenium.common.exceptions import NoSuchElementException
from selenium.webdriver.common.by import By
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.support.ui import WebDriverWait

BASE_URL = 'https://the-internet.herokuapp.com/dynamic_loading'


@pytest.fixture
def driver():
    driver = webdriver.Firefox()
    yield driver
    driver.quit()


def test_implicit_wait_gives_up_before_the_element_is_rendered(driver):
    driver.implicitly_wait(3)
    driver.get(f'{BASE_URL}/2')
    driver.find_element(By.CSS_SELECTOR, '#start button').click()
    with pytest.raises(NoSuchElementException):
        driver.find_element(By.ID, 'finish')


def test_implicit_wait_does_not_wait_for_hidden_elements(driver):
    driver.implicitly_wait(3)
    driver.get(f'{BASE_URL}/1')
    driver.find_element(By.CSS_SELECTOR, '#start button').click()
    assert not driver.find_element(By.ID, 'finish').is_displayed()


@pytest.mark.parametrize('example', ['1', '2'])
def test_explicit_wait(driver, example):
    driver.get(f'{BASE_URL}/{example}')
    driver.find_element(By.CSS_SELECTOR, '#start button').click()
    finish = WebDriverWait(driver, 10).until(EC.visibility_of_element_located((By.ID, 'finish')))
    assert finish.text == 'Hello World!'
