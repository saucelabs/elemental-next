import pytest
from vibium import browser


def retry_if_message_contains(fail_message, action, attempts=10):
    message = action()
    for _ in range(1, attempts):
        if fail_message not in message:
            break
        message = action()
    return message


@pytest.fixture
def page():
    bro = browser.start()
    yield bro.page()
    bro.stop()


def test_eventually_displays_a_successful_notification(page):
    def show_notification():
        page.go('https://the-internet.herokuapp.com/notification_message')
        return page.find('#flash').text()

    message = retry_if_message_contains('please try again', show_notification)
    assert 'Action successful' in message
