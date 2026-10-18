import urllib.request
import pytest
from selenium import webdriver
from selenium.webdriver.common.by import By


@pytest.fixture
def driver():
    driver = webdriver.Firefox()
    yield driver
    driver.quit()


def test_file_can_be_downloaded(driver):
    driver.get('https://the-internet.herokuapp.com/download')
    download_link = driver.find_element(By.CSS_SELECTOR, '.example a').get_attribute('href')

    request = urllib.request.Request(download_link, method='HEAD')
    with urllib.request.urlopen(request) as response:
        content_disposition = response.headers['Content-Disposition']
        content_length = int(response.headers['Content-Length'])

    assert content_disposition.startswith('attachment')
    assert content_length > 0
