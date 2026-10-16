import pytest
from selenium import webdriver

STATUS_CODE_SCRIPT = "return performance.getEntriesByType('navigation')[0].responseStatus"


@pytest.fixture
def driver():
    driver = webdriver.Firefox()
    yield driver
    driver.quit()


def status_code(driver):
    return driver.execute_script(STATUS_CODE_SCRIPT)


@pytest.mark.parametrize('expected', [200, 301, 404, 500])
def test_status_code(driver, expected):
    driver.get(f'https://the-internet.herokuapp.com/status_codes/{expected}')
    assert status_code(driver) == expected
