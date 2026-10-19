import pytest
from vibium import browser


@pytest.fixture
def page():
    bro = browser.start(headless=True)
    yield bro.page()
    bro.stop()


def test_loads_the_page(page):
    page.go('https://the-internet.herokuapp.com')
    assert page.title() == 'The Internet'

    user_agent = page.evaluate('navigator.userAgent')
    print(user_agent)
    assert 'HeadlessChrome' in user_agent
