import os
from urllib.request import urlopen
import pytest
from playwright.sync_api import Page, expect

GRID_URL = os.environ.get('GRID_URL', 'http://localhost:4444')


def grid_is_running():
    try:
        with urlopen(f'{GRID_URL}/status', timeout=5) as response:
            return response.status == 200
    except OSError:
        return False


if grid_is_running():
    # With this variable set, Playwright starts Chrome on the Grid instead of on this machine
    os.environ['SELENIUM_REMOTE_URL'] = GRID_URL
else:
    pytestmark = pytest.mark.skip(
        reason='Start a Selenium Grid on http://localhost:4444 (or set GRID_URL) to run this test')


def test_load_the_page(page: Page):
    page.goto('https://the-internet.herokuapp.com')
    expect(page).to_have_title('The Internet')
