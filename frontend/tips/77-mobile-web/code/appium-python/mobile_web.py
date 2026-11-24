import os
import pytest
from appium import webdriver
from appium.options.android import UiAutomator2Options
from appium.options.ios import XCUITestOptions
from selenium.webdriver.common.by import By
from selenium.webdriver.support import expected_conditions
from selenium.webdriver.support.wait import WebDriverWait

SAUCE_URL = 'https://ondemand.us-west-1.saucelabs.com/wd/hub'
BASE_URL = 'https://the-internet.herokuapp.com'


@pytest.fixture(params=['Android', 'iOS'])
def driver(request):
    if not os.environ.get('SAUCE_USERNAME') or not os.environ.get('SAUCE_ACCESS_KEY'):
        pytest.skip('Set SAUCE_USERNAME and SAUCE_ACCESS_KEY to run this test on Sauce Labs')

    platform = request.param
    if platform == 'Android':
        options = UiAutomator2Options()
        options.device_name = 'Google.*'
        options.set_capability('browserName', 'Chrome')
    else:
        options = XCUITestOptions()
        options.device_name = 'iPhone.*'
        options.set_capability('browserName', 'Safari')
    options.set_capability('sauce:options', {
        'username': os.environ['SAUCE_USERNAME'],
        'accessKey': os.environ['SAUCE_ACCESS_KEY'],
        'appiumVersion': 'appium3-2026-11',
        'name': f'Elemental Selenium - Tip 77 - Appium Python - {platform} - {request.node.originalname}',
    })
    driver = webdriver.Remote(SAUCE_URL, options=options)
    yield driver
    driver.quit()


def test_logs_in(driver):
    driver.get(BASE_URL)
    wait = WebDriverWait(driver, 30)
    wait.until(expected_conditions.element_to_be_clickable((By.CSS_SELECTOR, "a[href='/login']"))).click()

    wait.until(expected_conditions.visibility_of_element_located((By.CSS_SELECTOR, '#username'))).send_keys('tomsmith')
    driver.find_element(By.CSS_SELECTOR, '#password').send_keys('SuperSecretPassword!')
    if driver.capabilities['platformName'].lower() == 'android':
        driver.hide_keyboard()
    driver.find_element(By.CSS_SELECTOR, "button[type='submit']").click()

    flash = wait.until(expected_conditions.visibility_of_element_located((By.CSS_SELECTOR, '#flash')))
    assert 'You logged into a secure area!' in flash.text


def test_checks_a_checkbox(driver):
    driver.get(BASE_URL + '/checkboxes')

    checkbox = WebDriverWait(driver, 30).until(
        expected_conditions.element_to_be_clickable((By.CSS_SELECTOR, '#checkboxes input:first-of-type')))
    assert not checkbox.is_selected()
    checkbox.click()
    assert checkbox.is_selected()
