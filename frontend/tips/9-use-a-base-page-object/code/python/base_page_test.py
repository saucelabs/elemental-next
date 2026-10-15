import pytest
from selenium import webdriver
from dynamic_loading_page import DynamicLoadingPage
from login_page import LoginPage


@pytest.fixture
def driver():
    driver = webdriver.Firefox()
    yield driver
    driver.quit()


def test_dynamic_loading(driver):
    dynamic_loading = DynamicLoadingPage(driver)
    dynamic_loading.start()
    assert dynamic_loading.finish_text() == 'Hello World!'


def test_login(driver):
    login = LoginPage(driver)
    login.login_as('tomsmith', 'SuperSecretPassword!')
    assert login.success_message_present()
