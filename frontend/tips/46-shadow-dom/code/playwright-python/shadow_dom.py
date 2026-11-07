import pytest
from playwright.sync_api import Page, expect


@pytest.fixture(autouse=True)
def open_page(page: Page):
    page.goto('https://the-internet.herokuapp.com/shadowdom_advanced')


def test_click_a_button_inside_nested_shadow_roots(page: Page):
    # CSS locators look inside open shadow roots, so there is no need to name the shadow hosts
    page.locator('#inner-button').click()

    expect(page.locator('#nested-result')).to_have_text('You clicked the button in the inner shadow root')


def test_xpath_does_not_look_inside_shadow_roots(page: Page):
    expect(page.locator('xpath=//button[@id="inner-button"]')).to_have_count(0)
