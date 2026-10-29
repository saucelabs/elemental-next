from playwright.sync_api import BrowserContext, Page, expect


def test_multiple_windows(page: Page, context: BrowserContext):
    page.goto('https://the-internet.herokuapp.com/windows')

    with context.expect_page() as new_page_info:
        page.locator('.example a').click()
    new_page = new_page_info.value

    expect(page).to_have_title('The Internet')
    expect(new_page).to_have_title('New Window')
