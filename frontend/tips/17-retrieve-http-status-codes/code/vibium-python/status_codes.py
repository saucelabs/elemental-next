import pytest
from vibium import browser


@pytest.fixture
def page():
    bro = browser.start()
    yield bro.page()
    bro.stop()


@pytest.mark.parametrize('expected', [200, 301, 404, 500])
def test_status_code(page, expected):
    url = f'https://the-internet.herokuapp.com/status_codes/{expected}'

    response = page.capture.response(url, lambda: page.go(url))

    assert response['status'] == expected
