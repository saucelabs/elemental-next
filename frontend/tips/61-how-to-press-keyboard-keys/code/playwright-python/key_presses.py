import pytest
from playwright.sync_api import Page, expect


@pytest.fixture(autouse=True)
def visit_key_presses_page(page: Page):
    page.goto('https://the-internet.herokuapp.com/key_presses')


def test_press_key_on_element(page: Page):
    page.locator('#target').press('Space')
    expect(page.locator('#result')).to_have_text('You entered: SPACE')


def test_press_key_without_element(page: Page):
    page.keyboard.press('Tab')
    expect(page.locator('#result')).to_have_text('You entered: TAB')
