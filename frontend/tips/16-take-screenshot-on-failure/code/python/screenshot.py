import pytest
from selenium import webdriver
from selenium.webdriver.common.by import By


@pytest.fixture
def driver(request):
    driver = webdriver.Firefox()
    yield driver
    report = getattr(request.node, 'report_call', None)
    if report is not None and report.failed:
        driver.save_screenshot(f'failshot_{request.node.name}.png')
    driver.quit()


def test_fails_on_purpose(driver):
    driver.get('https://the-internet.herokuapp.com')
    assert driver.find_element(By.CSS_SELECTOR, 'h1').text == 'blah blah blah'
