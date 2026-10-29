from playwright.sync_api import BrowserContext, Page, expect


def test_opens_new_tab(page: Page, context: BrowserContext):
    page.goto('https://the-internet.herokuapp.com/windows')

    new_page = context.new_page()
    new_page.goto('https://the-internet.herokuapp.com/typos')

    assert len(context.pages) == 2
    expect(new_page.locator('h3')).to_have_text('Typos')
