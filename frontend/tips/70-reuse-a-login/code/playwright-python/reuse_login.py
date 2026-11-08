import pytest
from playwright.sync_api import Browser, Page, expect

BASE_URL = 'https://the-internet.herokuapp.com'


@pytest.fixture(scope='session')
def storage_state(browser: Browser):
    # Logs in through the form once, and keeps the cookies and the local storage of the logged-in user
    context = browser.new_context()
    page = context.new_page()
    page.goto(f'{BASE_URL}/login')
    page.get_by_label('Username').fill('tomsmith')
    page.get_by_label('Password').fill('SuperSecretPassword!')
    page.locator('button[type="submit"]').click()
    expect(page.locator('#username')).to_have_text('tomsmith')
    state = context.storage_state()
    context.close()
    return state


@pytest.fixture(scope='session')
def browser_context_args(browser_context_args, storage_state):
    # The pytest-playwright plugin creates each browser context with these options
    return {**browser_context_args, 'storage_state': storage_state}


def test_the_secure_area_shows_the_user(page: Page):
    page.goto(f'{BASE_URL}/secure')

    expect(page.locator('#username')).to_have_text('tomsmith')


def test_log_out(page: Page):
    page.goto(f'{BASE_URL}/secure')
    page.locator('a[href="/logout"]').click()

    expect(page.locator('#flash')).to_contain_text('You logged out of the secure area!')
