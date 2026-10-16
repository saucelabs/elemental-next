import os
import pytest
from selenium import webdriver

SAUCE_URL = 'https://ondemand.us-west-1.saucelabs.com/wd/hub'


@pytest.fixture
def driver():
    if not os.environ.get('SAUCE_USERNAME') or not os.environ.get('SAUCE_ACCESS_KEY'):
        pytest.skip('Set SAUCE_USERNAME and SAUCE_ACCESS_KEY to run this test on Sauce Labs')

    options = webdriver.ChromeOptions()
    options.browser_version = 'latest'
    options.platform_name = 'Windows 11'
    options.set_capability('sauce:options', {
        'username': os.environ['SAUCE_USERNAME'],
        'accessKey': os.environ['SAUCE_ACCESS_KEY'],
        'name': 'Elemental Selenium - Tip 26 - Python',
    })
    driver = webdriver.Remote(command_executor=SAUCE_URL, options=options)
    yield driver
    driver.quit()


def test_title(driver):
    driver.get('https://the-internet.herokuapp.com')
    assert 'The Internet' in driver.title
