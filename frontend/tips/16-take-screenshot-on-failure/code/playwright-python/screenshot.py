from playwright.sync_api import Page, expect


def test_fails_on_purpose(page: Page):
    page.goto('https://the-internet.herokuapp.com')

    expect(page.locator('h1')).to_have_text('blah blah blah', timeout=2000)
