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


@pytest.fixture(params=['Android', 'iOS'])
def driver(request):
    if not os.environ.get('SAUCE_USERNAME') or not os.environ.get('SAUCE_ACCESS_KEY'):
        pytest.skip('Set SAUCE_USERNAME and SAUCE_ACCESS_KEY to run this test on Sauce Labs')

    platform = request.param
    if platform == 'Android':
        options = UiAutomator2Options()
        options.device_name = 'Google.*'
        options.app = ANDROID_APP
    else:
        options = XCUITestOptions()
        options.device_name = 'iPhone.*'
        options.app = IOS_APP
    options.set_capability('sauce:options', {
        'username': os.environ['SAUCE_USERNAME'],
        'accessKey': os.environ['SAUCE_ACCESS_KEY'],
        'appiumVersion': 'latest',
        'name': f'Elemental Selenium - Tip 79 - Appium Python - {platform}',
    })
    driver = webdriver.Remote(SAUCE_URL, options=options)
    yield driver
    driver.quit()


def test_shows_the_backpack_in_the_catalog(driver):
    if driver.capabilities['platformName'].lower() == 'android':
        backpack = (AppiumBy.ANDROID_UIAUTOMATOR, 'new UiSelector().text("Sauce Labs Backpack")')
    else:
        backpack = (AppiumBy.IOS_PREDICATE, "label == 'Sauce Labs Backpack - Black'")
    element = WebDriverWait(driver, 30).until(expected_conditions.visibility_of_element_located(backpack))
    assert element.is_displayed()
