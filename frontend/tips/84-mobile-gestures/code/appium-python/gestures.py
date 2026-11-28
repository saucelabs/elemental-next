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
            'name': f'Elemental Selenium - Tip 84 - Appium Python - {platform}',
        })
        driver = webdriver.Remote(SAUCE_URL, options=options)
        drivers.append(driver)
        return driver

    yield start
    for driver in drivers:
        driver.quit()


def find(driver, by, value):
    return WebDriverWait(driver, 30).until(expected_conditions.presence_of_element_located((by, value)))


def draw_line(driver, pad):
    y = pad['y'] + pad['height'] // 2
    actions = ActionBuilder(driver, mouse=PointerInput(POINTER_TOUCH, 'finger'), duration=500)
    actions.pointer_action.move_to_location(pad['x'] + pad['width'] // 4, y)
    actions.pointer_action.pointer_down()
    actions.pointer_action.move_to_location(pad['x'] + pad['width'] * 3 // 4, y)
    actions.pointer_action.pointer_up()
    actions.perform()


def assert_draws_on(driver, pad):
    before = pad.screenshot_as_png
    draw_line(driver, pad.rect)
    after = pad.screenshot_as_png
    assert before != after


def test_android(start_driver):
    options = UiAutomator2Options()
    options.device_name = 'Google.*'
    options.app = ANDROID_APP
    options.auto_grant_permissions = True
    driver = start_driver(options, 'Android')

    find(driver, AppiumBy.ACCESSIBILITY_ID, 'View menu').click()
    find(driver, AppiumBy.ANDROID_UIAUTOMATOR, 'new UiSelector().text("Drawing")').click()
    assert_draws_on(driver, find(driver, AppiumBy.ACCESSIBILITY_ID, 'Pad to draw on'))


def test_ios(start_driver):
    options = XCUITestOptions()
    options.device_name = 'iPhone.*'
    options.app = IOS_APP
    driver = start_driver(options, 'iOS')

    find(driver, AppiumBy.ACCESSIBILITY_ID, 'More-tab-item').click()
    find(driver, AppiumBy.ACCESSIBILITY_ID, 'Drawing-menu-item').click()
    assert_draws_on(driver, find(driver, AppiumBy.ACCESSIBILITY_ID, 'DrawingBackground Icons'))
