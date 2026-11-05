import os
import tempfile
import pytest
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait

SAUCE_URL = 'https://ondemand.us-west-1.saucelabs.com/wd/hub'


@pytest.fixture
def driver():
    if not os.environ.get('SAUCE_USERNAME') or not os.environ.get('SAUCE_ACCESS_KEY'):
        pytest.skip('Set SAUCE_USERNAME and SAUCE_ACCESS_KEY to run this test on Sauce Labs')

    options = webdriver.ChromeOptions()
    options.browser_version = 'latest'
    options.platform_name = 'Windows 11'
    # Asks Sauce Labs to keep the files the browser downloads, so we can fetch them
    options.enable_downloads = True
    options.set_capability('sauce:options', {
        'username': os.environ['SAUCE_USERNAME'],
        'accessKey': os.environ['SAUCE_ACCESS_KEY'],
        'name': 'Elemental Selenium - Tip 28 - Python',
    })
    driver = webdriver.Remote(command_executor=SAUCE_URL, options=options)
    yield driver
    driver.quit()


def test_download_file(driver):
    driver.get('https://the-internet.herokuapp.com/download')
    link = driver.find_element(By.CSS_SELECTOR, '.example a')
    file_name = link.text
    link.click()

    # The file is downloaded on the remote machine, so we ask for the list of files
    WebDriverWait(driver, 10).until(lambda d: file_name in d.get_downloadable_files())

    # Copies the file from the remote machine to a folder on this machine
    with tempfile.TemporaryDirectory() as target_dir:
        driver.download_file(file_name, target_dir)
        downloaded_file = os.path.join(target_dir, file_name)
        assert os.path.getsize(downloaded_file) > 0
