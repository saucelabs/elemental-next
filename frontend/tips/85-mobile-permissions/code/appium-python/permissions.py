import os
import pytest
from appium import webdriver
from appium.options.android import UiAutomator2Options
from appium.options.ios import XCUITestOptions
from appium.webdriver.common.appiumby import AppiumBy
from selenium.common.exceptions import TimeoutException
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
            'name': f'Elemental Selenium - Tip 85 - Appium Python - {platform}',
        })
        driver = webdriver.Remote(SAUCE_URL, options=options)
        drivers.append(driver)
        return driver

    yield start
    for driver in drivers:
        driver.quit()


def find(driver, by, value):
    return WebDriverWait(driver, 30).until(expected_conditions.visibility_of_element_located((by, value)))


def allow_if_asked(driver, by, value):
    try:
        WebDriverWait(driver, 10).until(expected_conditions.element_to_be_clickable((by, value))).click()
    except TimeoutException:
        pass


def test_android(start_driver):
    options = UiAutomator2Options()
    options.device_name = 'Google.*'
    options.app = ANDROID_APP
    driver = start_driver(options, 'Android')

    find(driver, AppiumBy.ACCESSIBILITY_ID, 'View menu').click()
    find(driver, AppiumBy.ANDROID_UIAUTOMATOR, 'new UiSelector().text("Geo Location")').click()
    allow_if_asked(driver, AppiumBy.ID, 'com.android.permissioncontroller:id/permission_allow_foreground_only_button')
    assert find(driver, AppiumBy.ACCESSIBILITY_ID, 'Start observation of user location').is_displayed()


def test_ios(start_driver):
    options = XCUITestOptions()
    options.device_name = 'iPhone.*'
    options.app = IOS_APP
    driver = start_driver(options, 'iOS')

    find(driver, AppiumBy.ACCESSIBILITY_ID, 'More-tab-item').click()
    find(driver, AppiumBy.ACCESSIBILITY_ID, 'GeoLocation-menu-item').click()
    allow_if_asked(driver, AppiumBy.ACCESSIBILITY_ID, 'Allow While Using App')
    assert find(driver, AppiumBy.ACCESSIBILITY_ID, 'Latitude').is_displayed()
