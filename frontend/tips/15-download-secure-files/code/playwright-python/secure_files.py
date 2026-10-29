from playwright.sync_api import Page, Playwright, expect

BASE_URL = 'https://the-internet.herokuapp.com'


def test_files_behind_basic_auth(new_context):
    context = new_context(http_credentials={'username': 'admin', 'password': 'admin'})
    page = context.new_page()
    page.goto(f'{BASE_URL}/download_secure')
    link = page.locator('.example a').first.evaluate('element => element.href')

    response = page.request.head(link)
    assert response.status == 200, link


def test_page_behind_form_login(page: Page, playwright: Playwright):
    page.goto(f'{BASE_URL}/login')
    page.locator('#username').fill('tomsmith')
    page.locator('#password').fill('SuperSecretPassword!')
    page.locator('#login button').click()
    expect(page.locator('.flash.success')).to_be_visible()

    response = page.request.get(f'{BASE_URL}/secure', max_redirects=0)
    assert response.status == 200

    logged_out = playwright.request.new_context()
    response = logged_out.get(f'{BASE_URL}/secure', max_redirects=0)
    assert response.status == 302
    logged_out.dispose()
