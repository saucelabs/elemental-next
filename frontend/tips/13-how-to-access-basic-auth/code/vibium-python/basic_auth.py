import pytest
from vibium import browser

MESSAGE = 'Congratulations! You must have the proper credentials.'


@pytest.fixture
def page():
    bro = browser.start()
    yield bro.page()
    bro.stop()


def test_basic_auth(page):
    page.go('https://admin:admin@the-internet.herokuapp.com/basic_auth')

    assert page.find(css='.example p').text() == MESSAGE
