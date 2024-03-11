import pytest
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait

@pytest.fixture
def driver_setup_teardown():
    driver = webdriver.Firefox()
    yield driver
    driver.quit()


def test_example_1(driver_setup_teardown):
    driver = driver_setup_teardown
    driver.get('https://the-internet.herokuapp.com/windows')
    driver.find_element(By.CSS_SELECTOR , '.example a').click()
    driver.switch_to.window(driver.window_handles[0])
    assert driver.title == "The Internet", "title should be The Internet"
    driver.switch_to.window(driver.window_handles[-1])
    # Waiting for the new window to have a title, then we consider it is loaded
    WebDriverWait(driver, 2).until(lambda d: d.title != "")
    assert driver.title == "New Window", "title should be New Window"

def test_example_2(driver_setup_teardown):
    driver = driver_setup_teardown
    driver.get('https://the-internet.herokuapp.com/windows')
    first_window = driver.window_handles[0]
    driver.find_element(By.CSS_SELECTOR , '.example a').click()
    all_windows = driver.window_handles
    for window in all_windows:
        if window != first_window:
            new_window = window
    driver.switch_to.window(first_window)
    assert driver.title == "The Internet", "title should be The Internet"
    driver.switch_to.window(new_window)
    # Waiting for the new window to have a title, then we consider it is loaded
    WebDriverWait(driver, 2).until(lambda d: d.title != "")
    assert driver.title == "New Window", "title should be New Window"

