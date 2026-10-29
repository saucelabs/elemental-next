from playwright.sync_api import Page, expect

ATTEMPTS = 10


def test_eventually_displays_a_successful_notification(page: Page):
    for attempt in range(1, ATTEMPTS + 1):
        page.goto('https://the-internet.herokuapp.com/notification_message')
        try:
            expect(page.locator('#flash')).to_contain_text('Action successful', timeout=1000)
            return
        except AssertionError:
            if attempt == ATTEMPTS:
                raise
