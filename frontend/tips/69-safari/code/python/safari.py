import sys

import pytest
from selenium import webdriver

# Safari runs on macOS only, so the test is skipped on Windows and Linux
pytestmark = pytest.mark.skipif(sys.platform != 'darwin', reason='Safari runs on macOS only')


@pytest.fixture
def driver():
    driver = webdriver.Safari()
    yield driver
    driver.quit()


def test_page_loaded(driver):
    driver.get('https://the-internet.herokuapp.com')
    print(f"{driver.capabilities['browserName']} {driver.capabilities['browserVersion']}")

    assert driver.title == 'The Internet'
