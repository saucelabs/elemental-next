import os
import pytest
import requests
from appium import webdriver
from appium.options.android import UiAutomator2Options
from appium.options.ios import XCUITestOptions
from appium.webdriver.common.appiumby import AppiumBy
from selenium.webdriver.support import expected_conditions
from selenium.webdriver.support.wait import WebDriverWait

SAUCE_URL = 'https://ondemand.us-west-1.saucelabs.com/wd/hub'
STORAGE_URL = 'https://api.us-west-1.saucelabs.com/v1/storage/upload'
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
            'name': f'Elemental Selenium - Tip 78 - Appium Python - {platform}',
        })
        driver = webdriver.Remote(SAUCE_URL, options=options)
        drivers.append(driver)
        return driver

    yield start
    for driver in drivers:
        driver.quit()


def upload_app(url):
    file_name = url.split('/')[-1]
    app = requests.get(url).content
    response = requests.post(STORAGE_URL, files={'payload': (file_name, app)},
                             auth=(os.environ['SAUCE_USERNAME'], os.environ['SAUCE_ACCESS_KEY']))
    response.raise_for_status()
    return f'storage:filename={file_name}'


def assert_backpack_is_shown(driver, locator):
    backpack = WebDriverWait(driver, 30).until(expected_conditions.visibility_of_element_located(locator))
    assert backpack.is_displayed()


def test_android(start_driver):
    options = UiAutomator2Options()
    options.device_name = 'Google.*'
    options.app = upload_app(ANDROID_APP)
    driver = start_driver(options, 'Android')

    assert_backpack_is_shown(driver, (AppiumBy.ANDROID_UIAUTOMATOR, 'new UiSelector().text("Sauce Labs Backpack")'))


def test_ios(start_driver):
    options = XCUITestOptions()
    options.device_name = 'iPhone.*'
    options.app = upload_app(IOS_APP)
    driver = start_driver(options, 'iOS')

    assert_backpack_is_shown(driver, (AppiumBy.IOS_PREDICATE, "label == 'Sauce Labs Backpack - Black'"))
