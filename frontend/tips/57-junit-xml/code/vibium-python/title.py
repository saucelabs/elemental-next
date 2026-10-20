import pytest
from vibium import browser


@pytest.fixture
def page():
    bro = browser.start()
    yield bro.page()
    bro.stop()


def test_title(page):
    page.go('https://the-internet.herokuapp.com')
    assert page.title() == 'The Internet'
