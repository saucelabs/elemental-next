import os
import pytest
from selenium import webdriver

SAUCE_URL = 'https://ondemand.us-west-1.saucelabs.com/wd/hub'
BROWSERS = {
    'chrome': webdriver.ChromeOptions,
    'firefox': webdriver.FirefoxOptions,
    'edge': webdriver.EdgeOptions,
}


@pytest.fixture(params=BROWSERS.keys())
def driver(request):
    if not os.environ.get('SAUCE_USERNAME') or not os.environ.get('SAUCE_ACCESS_KEY'):
        pytest.skip('Set SAUCE_USERNAME and SAUCE_ACCESS_KEY to run this test on Sauce Labs')

    options = BROWSERS[request.param]()
    options.browser_version = 'latest'
    options.platform_name = 'Windows 11'
    options.set_capability('sauce:options', {
        'username': os.environ['SAUCE_USERNAME'],
        'accessKey': os.environ['SAUCE_ACCESS_KEY'],
        'name': f'Elemental Selenium - Tip 41 - Python - {request.param}',
    })
    driver = webdriver.Remote(command_executor=SAUCE_URL, options=options)
    yield driver
    driver.quit()


def test_title(driver):
    driver.get('https://the-internet.herokuapp.com')
    assert driver.title == 'The Internet'
