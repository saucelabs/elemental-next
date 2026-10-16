import os
import urllib.request
import pytest
from selenium import webdriver

GRID_URL = os.environ.get('GRID_URL', 'http://localhost:4444')


def grid_is_running():
    try:
        with urllib.request.urlopen(f'{GRID_URL}/status', timeout=5):
            return True
    except OSError:
        return False


@pytest.fixture
def driver():
    if not grid_is_running():
        pytest.skip(f'Start a Selenium Grid on {GRID_URL} (or set GRID_URL) to run this test')
    driver = webdriver.Remote(command_executor=GRID_URL, options=webdriver.FirefoxOptions())
    yield driver
    driver.quit()


def test_page_loaded(driver):
    driver.get('https://the-internet.herokuapp.com')
    assert driver.title == 'The Internet'
