import pytest
from playwright.sync_api import Page, expect


@pytest.fixture(autouse=True)
def visit_alerts_page(page: Page):
    page.goto('https://the-internet.herokuapp.com/javascript_alerts')


def test_accept_confirmation(page: Page):
    page.once('dialog', lambda dialog: dialog.accept())
    page.get_by_role('button', name='Click for JS Confirm').click()

    expect(page.locator('#result')).to_have_text('You clicked: Ok')


def test_dismiss_confirmation(page: Page):
    page.once('dialog', lambda dialog: dialog.dismiss())
    page.get_by_role('button', name='Click for JS Confirm').click()

    expect(page.locator('#result')).to_have_text('You clicked: Cancel')
