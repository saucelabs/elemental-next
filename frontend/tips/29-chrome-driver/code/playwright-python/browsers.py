from playwright.sync_api import Playwright, expect


def load_the_page(playwright: Playwright, channel=None):
    browser = playwright.chromium.launch(channel=channel)
    page = browser.new_page()
    page.goto('https://the-internet.herokuapp.com')
    expect(page).to_have_title('The Internet')
    print(f'{channel or "Playwright Chromium"} {browser.version}')
    browser.close()


# The browser that `playwright install chromium` downloaded for this Playwright version
def test_playwright_chromium(playwright: Playwright):
    load_the_page(playwright)


# The Google Chrome installed on this machine
def test_google_chrome(playwright: Playwright):
    load_the_page(playwright, channel='chrome')
