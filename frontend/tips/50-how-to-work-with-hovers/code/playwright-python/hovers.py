from playwright.sync_api import Page, expect


def test_display_caption_on_hover(page: Page):
    page.goto('https://the-internet.herokuapp.com/hovers')
    an_avatar = page.locator('.figure').first
    caption = an_avatar.locator('.figcaption')
    expect(caption).to_be_hidden()

    an_avatar.hover()
    expect(caption).to_be_visible()
