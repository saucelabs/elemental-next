from playwright.sync_api import Page, expect


def test_swap_columns(page: Page):
    page.goto('https://the-internet.herokuapp.com/drag_and_drop')

    page.locator('#column-a').drag_to(page.locator('#column-b'))

    expect(page.locator('#column-a')).to_have_text('B')
    expect(page.locator('#column-b')).to_have_text('A')
