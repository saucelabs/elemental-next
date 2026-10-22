import pytest
from vibium import browser


@pytest.fixture
def page():
    bro = browser.start()
    yield bro.page()
    bro.stop()


# The page shows the successful message only some of the time, so this test is flaky on purpose.
# If it fails, pytest-rerunfailures runs it again (with its fixture), up to 9 more times.
@pytest.mark.flaky(reruns=9)
def test_notification_message(page):
    page.go('https://the-internet.herokuapp.com/notification_message')
    message = page.find('#flash').text()
    assert 'Action successful' in message, message
