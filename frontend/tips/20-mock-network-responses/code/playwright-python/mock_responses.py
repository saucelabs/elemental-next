from playwright.sync_api import Page, Route, expect


def test_page_shows_the_mocked_answer(page: Page):
    def mock(route: Route):
        route.fulfill(json={'message': 'Hello from the mock'})

    page.route('**/slow_api/data?*', mock)

    page.goto('https://the-internet.herokuapp.com/slow_api')
    page.locator('#call-api').click()

    expect(page.locator('#status-text')).to_have_text('Hello from the mock')
    expect(page.locator('#attempts li')).to_have_text('200: Hello from the mock')
