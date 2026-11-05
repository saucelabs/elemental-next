import pytest
from selenium import webdriver


@pytest.fixture
def driver():
    # Selenium Manager finds Chrome and the matching ChromeDriver, and downloads them when they are missing
    driver = webdriver.Chrome()
    yield driver
    driver.quit()


def test_page_loaded(driver):
    driver.get('https://the-internet.herokuapp.com')
    assert driver.title == 'The Internet'
    print(f"Chrome {driver.capabilities['browserVersion']}, "
          f"ChromeDriver {driver.capabilities['chrome']['chromedriverVersion'].split(' ')[0]}")
