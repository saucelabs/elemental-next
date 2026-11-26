import os
import pytest
from appium import webdriver
from appium.options.android import UiAutomator2Options
from appium.options.ios import XCUITestOptions
from appium.webdriver.common.appiumby import AppiumBy
from selenium.webdriver.common.actions.action_builder import ActionBuilder
from selenium.webdriver.common.actions.interaction import POINTER_TOUCH
from selenium.webdriver.common.actions.pointer_input import PointerInput
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
            'name': f'Elemental Selenium - Tip 82 - Appium Python - {platform}',
        })
        driver = webdriver.Remote(SAUCE_URL, options=options)
        drivers.append(driver)
        return driver

    yield start
    for driver in drivers:
        driver.quit()


def wait_for_catalog(driver, product):
    WebDriverWait(driver, 30).until(expected_conditions.visibility_of_element_located(product))


def swipe_up_until_displayed(driver, locator):
    for _ in range(20):
        if any(element.is_displayed() for element in driver.find_elements(*locator)):
            return True
        swipe_up(driver)
    return False


def swipe_up(driver):
    size = driver.get_window_size()
    x = size['width'] // 2
    actions = ActionBuilder(driver, mouse=PointerInput(POINTER_TOUCH, 'finger'), duration=500)
    actions.pointer_action.move_to_location(x, size['height'] * 7 // 10)
    actions.pointer_action.pointer_down()
    actions.pointer_action.move_to_location(x, size['height'] * 3 // 10)
    actions.pointer_action.pointer_up()
    actions.perform()


def test_android(start_driver):
    options = UiAutomator2Options()
    options.device_name = 'Google.*'
    options.app = ANDROID_APP
    driver = start_driver(options, 'Android')

    wait_for_catalog(driver, (AppiumBy.ACCESSIBILITY_ID, 'Product Image'))
    onesie = (AppiumBy.ANDROID_UIAUTOMATOR, 'new UiSelector().text("Sauce Labs Onesie")')
    assert swipe_up_until_displayed(driver, onesie)


def test_ios(start_driver):
    options = XCUITestOptions()
    options.device_name = 'iPhone.*'
    options.app = IOS_APP
    driver = start_driver(options, 'iOS')

    wait_for_catalog(driver, (AppiumBy.ACCESSIBILITY_ID, 'ProductItem'))
    onesie = (AppiumBy.IOS_PREDICATE, "label == 'Sauce Labs Onesie'")
    assert swipe_up_until_displayed(driver, onesie)
