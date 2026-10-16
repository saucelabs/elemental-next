import pytest
from selenium import webdriver


@pytest.fixture
def driver():
    driver = webdriver.Firefox()
    yield driver
    driver.quit()


def test_title(driver):
    driver.get('https://the-internet.herokuapp.com')
    assert driver.title == 'The Internet'
