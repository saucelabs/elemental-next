import pytest
from selenium import webdriver
from dynamic_loading_page import DynamicLoadingPage


@pytest.fixture
def driver():
    driver = webdriver.Firefox()
    yield driver
    driver.quit()


def test_hello_world_is_displayed(driver):
    dynamic_loading = DynamicLoadingPage(driver)
    dynamic_loading.start()
    dynamic_loading.wait_for_finish()
    assert dynamic_loading.finish_text() == 'Hello World!'
