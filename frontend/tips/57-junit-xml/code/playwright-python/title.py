from playwright.sync_api import Page, expect


def test_has_the_right_title(page: Page):
    page.goto('https://the-internet.herokuapp.com')
    expect(page).to_have_title('The Internet')
