import pytest
from selenium import webdriver
from selenium.webdriver.common.action_chains import ActionChains
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys


@pytest.fixture
def driver():
    driver = webdriver.Firefox()
    driver.get('https://the-internet.herokuapp.com/key_presses')
    yield driver
    driver.quit()


def test_send_keys_to_an_element(driver):
    driver.find_element(By.ID, 'target').send_keys(Keys.SPACE)
    assert driver.find_element(By.ID, 'result').text == 'You entered: SPACE'


def test_send_keys_without_an_element(driver):
    ActionChains(driver).send_keys(Keys.TAB).perform()
    assert driver.find_element(By.ID, 'result').text == 'You entered: TAB'
