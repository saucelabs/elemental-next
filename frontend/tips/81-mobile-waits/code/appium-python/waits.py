import os
import pytest
from appium import webdriver
from appium.options.android import UiAutomator2Options
from appium.options.ios import XCUITestOptions
from appium.webdriver.common.appiumby import AppiumBy
from selenium.webdriver.support import expected_conditions as ec
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
            'name': f'Elemental Selenium - Tip 81 - Appium Python - {platform}',
        })
        driver = webdriver.Remote(SAUCE_URL, options=options)
        drivers.append(driver)
        return driver

    yield start
    for driver in drivers:
        driver.quit()


def by_id(accessibility_id):
    return AppiumBy.ACCESSIBILITY_ID, accessibility_id


def test_android(start_driver):
    options = UiAutomator2Options()
    options.device_name = 'Google Pixel ([89]|1[0-9])( Pro)?'
    options.app = ANDROID_APP
    driver = start_driver(options, 'Android')
    wait = WebDriverWait(driver, 30)

    wait.until(ec.visibility_of_element_located(by_id('Product Image'))).click()
    wait.until(ec.element_to_be_clickable(by_id('Tap to add product to cart'))).click()
    wait.until(ec.element_to_be_clickable(by_id('View cart'))).click()

    checkout = by_id('Confirms products for checkout')
    wait.until(ec.visibility_of_element_located(checkout))
    wait.until(ec.element_to_be_clickable(by_id('Removes product from cart'))).click()
    assert wait.until(ec.invisibility_of_element_located(checkout))


def test_ios(start_driver):
    options = XCUITestOptions()
    options.device_name = 'iPhone 1[4-7].*'
    options.app = IOS_APP
    driver = start_driver(options, 'iOS')
    wait = WebDriverWait(driver, 30)

    wait.until(ec.visibility_of_element_located(by_id('ProductItem'))).click()
    wait.until(ec.element_to_be_clickable(by_id('AddToCart'))).click()
    wait.until(ec.element_to_be_clickable(by_id('Cart-tab-item'))).click()

    checkout = by_id('ProceedToCheckout')
    wait.until(ec.visibility_of_element_located(checkout))
    wait.until(ec.element_to_be_clickable(by_id('Remove Item'))).click()
    assert wait.until(ec.invisibility_of_element_located(checkout))
