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
URL = 'https://saucelabs.com'


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
            'name': f'Elemental Selenium - Tip 83 - Appium Python - {platform}',
        })
        driver = webdriver.Remote(SAUCE_URL, options=options)
        drivers.append(driver)
        return driver

    yield start
    for driver in drivers:
        driver.quit()


def find(driver, by, value):
    return WebDriverWait(driver, 30).until(expected_conditions.visibility_of_element_located((by, value)))


def test_android(start_driver):
    options = UiAutomator2Options()
    options.device_name = 'Google.*'
    options.app = ANDROID_APP
    driver = start_driver(options, 'Android')

    find(driver, AppiumBy.ACCESSIBILITY_ID, 'View menu').click()
    find(driver, AppiumBy.ANDROID_UIAUTOMATOR, 'new UiSelector().text("WebView")').click()

    url = find(driver, AppiumBy.ID, 'urlET')
    url.send_keys(URL)
    assert url.text == URL
    if driver.is_keyboard_shown():
        driver.hide_keyboard()

    find(driver, AppiumBy.ACCESSIBILITY_ID, 'Tap to view content of given url').click()
    assert find(driver, AppiumBy.CLASS_NAME, 'android.webkit.WebView').is_displayed()


def test_ios(start_driver):
    options = XCUITestOptions()
    options.device_name = 'iPhone.*'
    options.app = IOS_APP
    driver = start_driver(options, 'iOS')

    find(driver, AppiumBy.ACCESSIBILITY_ID, 'More-tab-item').click()
    find(driver, AppiumBy.ACCESSIBILITY_ID, 'Webview-menu-item').click()

    url = find(driver, AppiumBy.CLASS_NAME, 'XCUIElementTypeTextField')
    url.send_keys(URL)
    assert url.text == URL

    find(driver, AppiumBy.ACCESSIBILITY_ID, 'Go To Site').click()
    assert find(driver, AppiumBy.CLASS_NAME, 'XCUIElementTypeWebView').is_displayed()
