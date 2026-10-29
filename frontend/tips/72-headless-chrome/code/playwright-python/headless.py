from playwright.sync_api import Page, expect


def test_load_the_page(page: Page):
    page.goto('https://the-internet.herokuapp.com')
    expect(page).to_have_title('The Internet')

    user_agent = page.evaluate('() => navigator.userAgent')
    print(user_agent)
    assert 'HeadlessChrome' in user_agent
