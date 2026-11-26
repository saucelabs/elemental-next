import os
import pytest
from appium import webdriver
from appium.options.ios import XCUITestOptions
from appium.webdriver.common.appiumby import AppiumBy
from selenium.webdriver.support import expected_conditions
from selenium.webdriver.support.wait import WebDriverWait

SAUCE_URL = 'https://ondemand.us-west-1.saucelabs.com/wd/hub'
IOS_APP = 'https://github.com/saucelabs/my-demo-app-ios/releases/download/2.3.0/SauceLabs-Demo-App.ipa'


@pytest.fixture
def driver():
    if not os.environ.get('SAUCE_USERNAME') or not os.environ.get('SAUCE_ACCESS_KEY'):
        pytest.skip('Set SAUCE_USERNAME and SAUCE_ACCESS_KEY to run this test on Sauce Labs')

    options = XCUITestOptions()
    options.device_name = 'iPhone.*'
    options.app = IOS_APP
    options.set_capability('sauce:options', {
        'username': os.environ['SAUCE_USERNAME'],
        'accessKey': os.environ['SAUCE_ACCESS_KEY'],
        'appiumVersion': 'latest',
        'name': 'Elemental Selenium - Tip 86 - Appium Python - iOS',
    })
    driver = webdriver.Remote(SAUCE_URL, options=options)
    yield driver
    driver.quit()


def test_shows_the_catalog_in_landscape(driver):
    product = (AppiumBy.ACCESSIBILITY_ID, 'ProductItem')
    wait = WebDriverWait(driver, 30)
    wait.until(expected_conditions.visibility_of_element_located(product))
    assert driver.orientation == 'PORTRAIT'

    driver.orientation = 'LANDSCAPE'
    assert driver.orientation == 'LANDSCAPE'
    assert wait.until(expected_conditions.visibility_of_element_located(product)).is_displayed()

    driver.orientation = 'PORTRAIT'
    assert driver.orientation == 'PORTRAIT'
