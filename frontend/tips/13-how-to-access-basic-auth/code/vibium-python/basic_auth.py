import base64
import pytest
from vibium import browser

MESSAGE = 'Congratulations! You must have the proper credentials.'


@pytest.fixture
def page():
    bro = browser.start()
    yield bro.page()
    bro.stop()


def test_basic_auth(page):
    credentials = base64.b64encode(b'admin:admin').decode()
    page.set_headers({'Authorization': f'Basic {credentials}'})
    page.go('https://the-internet.herokuapp.com/basic_auth')

    assert page.find('.example p').text() == MESSAGE
