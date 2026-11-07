import time

import pytest
from selenium import webdriver
from selenium.webdriver.common.by import By


@pytest.fixture
def driver():
    driver = webdriver.Chrome()
    # Every request waits half a second, downloads at 200 KB/s and uploads at 50 KB/s
    driver.set_network_conditions(
        latency=500,
        download_throughput=200 * 1024,
        upload_throughput=50 * 1024,
    )
    yield driver
    driver.quit()


def test_page_loads_on_slow_network(driver):
    start = time.monotonic()
    driver.get('https://the-internet.herokuapp.com')
    seconds = time.monotonic() - start
    print(f'The page loaded in {seconds:.1f} seconds')

    assert driver.find_element(By.CSS_SELECTOR, '.heading').text == 'Welcome to the-internet'
    # On a fast connection, the page loads in 1 or 2 seconds
    assert seconds >= 3
