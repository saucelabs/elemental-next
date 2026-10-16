import pytest
from selenium import webdriver


@pytest.fixture
def driver():
    driver = webdriver.Firefox()
    yield driver
    driver.quit()


@pytest.mark.smoke
def test_title(driver):
    driver.get('https://the-internet.herokuapp.com')
    assert driver.title == 'The Internet'


@pytest.mark.wip
def test_work_in_progress(driver):
    # This test is not finished yet, so it fails. Since it's tagged as wip, it doesn't run with `-m smoke`.
    driver.get('https://the-internet.herokuapp.com')
    assert driver.title == 'Not finished yet'
