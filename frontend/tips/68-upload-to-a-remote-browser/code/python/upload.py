import os
import pytest
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.remote.file_detector import LocalFileDetector

SAUCE_URL = 'https://ondemand.us-west-1.saucelabs.com/wd/hub'


@pytest.fixture
def driver():
    if not os.environ.get('SAUCE_USERNAME') or not os.environ.get('SAUCE_ACCESS_KEY'):
        pytest.skip('Set SAUCE_USERNAME and SAUCE_ACCESS_KEY to run this test on Sauce Labs')

    options = webdriver.ChromeOptions()
    options.browser_version = 'latest'
    options.platform_name = 'Windows 11'
    options.set_capability('sauce:options', {
        'username': os.environ['SAUCE_USERNAME'],
        'accessKey': os.environ['SAUCE_ACCESS_KEY'],
        'name': 'Elemental Selenium - Tip 68 - Python',
    })
    driver = webdriver.Remote(command_executor=SAUCE_URL, options=options)
    # Sends the files typed in a file input to the remote machine (the default for remote drivers in Python)
    driver.file_detector = LocalFileDetector()
    yield driver
    driver.quit()


def test_upload_file(driver):
    filename = 'some-file.txt'
    file = os.path.join(os.path.dirname(os.path.abspath(__file__)), filename)
    driver.get('https://the-internet.herokuapp.com/upload')
    driver.find_element(By.ID, 'file-upload').send_keys(file)
    driver.find_element(By.ID, 'file-submit').click()
    assert driver.find_element(By.ID, 'uploaded-files').text == filename
