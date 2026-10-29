from playwright.sync_api import Page, expect


def test_select_from_a_dropdown(page: Page):
    page.goto('https://the-internet.herokuapp.com/dropdown')

    page.locator('#dropdown').select_option(label='Option 1')

    expect(page.locator('#dropdown option:checked')).to_have_text('Option 1')
