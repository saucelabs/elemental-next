from playwright.sync_api import Page, expect


def test_toast_hides_itself_after_one_minute(page: Page):
    # Replaces the timers of the page with fake ones that move only when the test says so
    page.clock.install()

    page.goto('https://the-internet.herokuapp.com/toasts?duration=60000')
    page.locator('#success-toast').click()
    expect(page.locator('.toast-message')).to_have_text('Saved successfully')

    page.clock.run_for(59000)
    expect(page.locator('.toast')).to_be_visible()

    page.clock.run_for(1000)
    expect(page.locator('.toast')).to_have_count(0)
