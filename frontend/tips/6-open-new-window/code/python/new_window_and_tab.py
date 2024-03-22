import pytest
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait

@pytest.fixture
def driver_setup_teardown():
    driver = webdriver.Firefox()
    yield driver
    driver.quit()

def test_new_window(driver_setup_teardown):
    driver = driver_setup_teardown
    driver.get('https://the-internet.herokuapp.com/windows')
    driver.switch_to.new_window('window')
    driver.get('https://the-internet.herokuapp.com/typos')
    assert len(driver.window_handles) == 2

def test_new_tab(driver_setup_teardown):
    driver = driver_setup_teardown
    driver.get('https://the-internet.herokuapp.com/windows')
    driver.switch_to.new_window('tab')
    driver.get('https://the-internet.herokuapp.com/typos')
    assert len(driver.window_handles) == 2
