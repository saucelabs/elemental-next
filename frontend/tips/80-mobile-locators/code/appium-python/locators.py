import os
import pytest
from appium import webdriver
from appium.options.android import UiAutomator2Options
from appium.options.ios import XCUITestOptions
from appium.webdriver.common.appiumby import AppiumBy
from selenium.webdriver.support import expected_conditions
from selenium.webdriver.support.wait import WebDriverWait

SAUCE_URL = 'https://ondemand.us-west-1.saucelabs.com/wd/hub'
ANDROID_APP = 'https://github.com/saucelabs/my-demo-app-android/releases/download/2.3.0/mda-2.3.0-27.apk'
IOS_APP = 'https://github.com/saucelabs/my-demo-app-ios/releases/download/2.3.0/SauceLabs-Demo-App.ipa'


@pytest.fixture
def start_driver():
    if not os.environ.get('SAUCE_USERNAME') or not os.environ.get('SAUCE_ACCESS_KEY'):
        pytest.skip('Set SAUCE_USERNAME and SAUCE_ACCESS_KEY to run this test on Sauce Labs')

    drivers = []

    def start(options, platform):
        options.set_capability('sauce:options', {
            'username': os.environ['SAUCE_USERNAME'],
            'accessKey': os.environ['SAUCE_ACCESS_KEY'],
            'appiumVersion': 'latest',
            'name': f'Elemental Selenium - Tip 80 - Appium Python - {platform}',
        })
        driver = webdriver.Remote(SAUCE_URL, options=options)
        drivers.append(driver)
        return driver

    yield start
    for driver in drivers:
        driver.quit()


def find(driver, accessibility_id):
    locator = (AppiumBy.ACCESSIBILITY_ID, accessibility_id)
    return WebDriverWait(driver, 30).until(expected_conditions.visibility_of_element_located(locator))


def test_android(start_driver):
    options = UiAutomator2Options()
    options.device_name = 'Google Pixel ([89]|1[0-9])( Pro)?'
    options.app = ANDROID_APP
    driver = start_driver(options, 'Android')

    find(driver, 'Product Image').click()
    find(driver, 'Tap to add product to cart').click()
    find(driver, 'View cart').click()
    assert find(driver, 'Confirms products for checkout').is_displayed()


def test_ios(start_driver):
    options = XCUITestOptions()
    options.device_name = 'iPhone 1[4-7].*'
    options.app = IOS_APP
    driver = start_driver(options, 'iOS')

    find(driver, 'ProductItem').click()
    find(driver, 'AddToCart').click()
    find(driver, 'Cart-tab-item').click()
    assert find(driver, 'ProceedToCheckout').is_displayed()
