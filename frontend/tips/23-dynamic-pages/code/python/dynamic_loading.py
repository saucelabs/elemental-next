import pytest
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait


@pytest.fixture
def driver():
    driver = webdriver.Firefox()
    yield driver
    driver.quit()


def wait_for(driver, condition, seconds=10):
    WebDriverWait(driver, seconds).until(condition)


@pytest.mark.parametrize('example', ['1', '2'], ids=['hidden element', 'element rendered after'])
def test_dynamic_loading(driver, example):
    driver.get(f'https://the-internet.herokuapp.com/dynamic_loading/{example}')
    driver.find_element(By.CSS_SELECTOR, '#start button').click()
    wait_for(driver, lambda d: d.find_element(By.ID, 'finish').is_displayed())
    assert driver.find_element(By.ID, 'finish').is_displayed()
