import pytest
from playwright.sync_api import Page, expect


@pytest.fixture(autouse=True)
def visit_checkboxes_page(page: Page):
    page.goto('https://the-internet.herokuapp.com/checkboxes')


def test_look_up_checked_attribute(page: Page):
    checkboxes = page.locator('input[type="checkbox"]')
    print(checkboxes.evaluate_all('elements => elements.map(element => element.getAttribute("checked"))'))
    assert checkboxes.first.get_attribute('checked') is None
    assert checkboxes.last.get_attribute('checked') is not None


def test_checkbox_is_checked(page: Page):
    checkboxes = page.locator('input[type="checkbox"]')
    expect(checkboxes.first).not_to_be_checked()
    expect(checkboxes.last).to_be_checked()
