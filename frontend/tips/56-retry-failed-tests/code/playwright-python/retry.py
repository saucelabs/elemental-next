from playwright.sync_api import Page


# The page shows the successful message only some of the time, so this test is flaky on purpose.
# If it fails, it runs again (see `--reruns` in pytest.ini).
def test_notification_message_is_successful(page: Page):
    page.goto('https://the-internet.herokuapp.com/notification_message')

    message = page.locator('#flash').text_content()
    assert 'Action successful' in message
