import pytest
from vibium import browser
from logging_page import LoggingPage


@pytest.fixture
def page():
    bro = browser.start()
    yield LoggingPage(bro.page())
    bro.stop()


def test_logs_every_action(page):
    page.go('https://the-internet.herokuapp.com')
    page.click('a[href="/checkboxes"]')

    assert page.messages == [
        'Navigated to https://the-internet.herokuapp.com',
        'Clicking on Checkboxes',
        'URL changed to https://the-internet.herokuapp.com/checkboxes',
    ]
