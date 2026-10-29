from playwright.sync_api import Page, expect
from dynamic_loading_page import DynamicLoadingPage
from login_page import LoginPage


def test_hello_world_after_loading(page: Page):
    dynamic_loading = DynamicLoadingPage(page)
    dynamic_loading.load()
    dynamic_loading.start()
    expect(dynamic_loading.finish_text).to_have_text('Hello World!', timeout=10000)


def test_login_with_valid_credentials(page: Page):
    login = LoginPage(page)
    login.load()
    login.login_as('tomsmith', 'SuperSecretPassword!')
    expect(login.success_message).to_be_visible()
