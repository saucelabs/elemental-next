import time
import pytest
from selenium import webdriver
from selenium.webdriver.common.by import By

HIGHLIGHT_STYLE = 'border: 2px solid red; border-style: dashed;'


@pytest.fixture
def driver():
    driver = webdriver.Firefox()
    driver.get('https://the-internet.herokuapp.com/large')
    yield driver
    driver.quit()


def highlight(driver, element, duration=3):
    # store the original style so it can be reset later
    original_style = element.get_dom_attribute('style') or ''
    # style the element with a red dashed border
    driver.execute_script("arguments[0].setAttribute('style', arguments[1])", element, HIGHLIGHT_STYLE)
    # keep the element highlighted for a spell and then revert
    if duration > 0:
        time.sleep(duration)
        driver.execute_script("arguments[0].setAttribute('style', arguments[1])", element, original_style)


def test_highlight(driver):
    element = driver.find_element(By.ID, 'sibling-2.3')
    highlight(driver, element, duration=0)
    assert 'dashed' in element.get_dom_attribute('style')


def test_highlight_reverts_the_style(driver):
    element = driver.find_element(By.ID, 'sibling-2.3')
    highlight(driver, element, duration=1)
    assert 'dashed' not in (element.get_dom_attribute('style') or '')
