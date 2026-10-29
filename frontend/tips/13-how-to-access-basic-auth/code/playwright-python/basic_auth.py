import pytest
from playwright.sync_api import Page, expect

MESSAGE = 'Congratulations! You must have the proper credentials.'


@pytest.fixture
def browser_context_args(browser_context_args):
    return {**browser_context_args, 'http_credentials': {'username': 'admin', 'password': 'admin'}}


def test_login_with_basic_auth(page: Page):
    page.goto('https://the-internet.herokuapp.com/basic_auth')

    expect(page.locator('.example p')).to_have_text(MESSAGE)
