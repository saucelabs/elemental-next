from playwright.sync_api import Page, expect


# Each step is code that the Playwright CLI printed in the session of the tip, in Python
def test_login(page: Page):
    page.goto('https://the-internet.herokuapp.com')
    page.get_by_role('link', name='Form Authentication').click()
    page.locator('#username').fill('tomsmith')
    page.locator('#password').fill('SuperSecretPassword!')
    page.locator('button[type=submit]').click()
    expect(page.locator('#flash')).to_contain_text('You logged into a secure area!')
