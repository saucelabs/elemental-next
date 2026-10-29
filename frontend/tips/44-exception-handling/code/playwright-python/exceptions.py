import pytest
from playwright.sync_api import Page, TimeoutError, expect


@pytest.fixture(autouse=True)
def login(page: Page):
    page.goto('https://the-internet.herokuapp.com/login')
    page.locator('#username').fill('tomsmith')
    page.locator('#password').fill('SuperSecretPassword!')
    page.locator('#login button').click()
    expect(page.locator('.flash.success')).to_be_visible()


def test_error_when_acting_on_missing_element(page: Page):
    with pytest.raises(TimeoutError, match='Timeout 2000ms exceeded'):
        page.locator('#login').click(timeout=2000)


def test_login_form_not_displayed(page: Page):
    assert not page.locator('#login').is_visible()
