from playwright.sync_api import Page, expect


def test_find_disabled_option(page: Page):
    page.goto('https://the-internet.herokuapp.com/dropdown')

    expect(page.locator('option', has_text='Please select an option')).to_be_disabled()
    expect(page.locator('option', has_text='Option 1')).to_be_enabled()
