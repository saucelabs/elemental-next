import pytest
from vibium import browser
from dynamic_loading_page import DynamicLoadingPage
from login_page import LoginPage


@pytest.fixture
def page():
    bro = browser.start()
    yield bro.page()
    bro.stop()


def test_hello_world_after_loading(page):
    dynamic_loading = DynamicLoadingPage(page)
    dynamic_loading.load()
    dynamic_loading.start()
    assert dynamic_loading.finish_text() == 'Hello World!'


def test_login_with_valid_credentials(page):
    login = LoginPage(page)
    login.load()
    login.login_as('tomsmith', 'SuperSecretPassword!')
    assert login.success_message_present()
