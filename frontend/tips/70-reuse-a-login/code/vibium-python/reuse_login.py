import pytest
from vibium import browser

BASE_URL = 'https://the-internet.herokuapp.com'


@pytest.fixture(scope='module')
def session_cookie():
    # Logs in through the form once, and keeps the session cookie of the logged-in user
    login_browser = browser.start()
    try:
        page = login_browser.page()
        page.go(f'{BASE_URL}/login')
        page.find('#username').fill('tomsmith')
        page.find('#password').fill('SuperSecretPassword!')
        page.find('button[type="submit"]').click()
        page.find('a[href="/logout"]')
        return next(cookie for cookie in page.context.cookies() if cookie['name'] == 'rack.session')
    finally:
        login_browser.stop()


@pytest.fixture
def page(session_cookie):
    bro = browser.start()
    page = bro.page()
    page.context.set_cookies([
        {'name': session_cookie['name'], 'value': session_cookie['value'], 'url': BASE_URL, 'sameSite': 'lax'}])
    yield page
    bro.stop()


def test_the_secure_area_shows_the_user(page):
    page.go(f'{BASE_URL}/secure')

    assert page.find('#username').text() == 'tomsmith'


def test_log_out(page):
    page.go(f'{BASE_URL}/secure')
    page.find('a[href="/logout"]').click()

    assert 'You logged out of the secure area!' in page.find('#flash').text()
