import os
from urllib.request import urlopen
import pytest
from playwright.sync_api import Page

SERVER_URL = os.environ.get('PLAYWRIGHT_SERVER_URL', 'ws://127.0.0.1:3000/')


def server_is_running():
    try:
        with urlopen(SERVER_URL.replace('ws', 'http', 1), timeout=5):
            return True
    except OSError:
        return False


@pytest.fixture(scope='session')
def browser(playwright):
    if not server_is_running():
        pytest.skip(f'Start a Playwright server on {SERVER_URL} (or set PLAYWRIGHT_SERVER_URL) to run this test')
    # Connects to a Chrome that runs where the Playwright server runs, instead of on this machine
    browser = playwright.chromium.connect(SERVER_URL)
    yield browser
    browser.close()


def test_download_file(page: Page, tmp_path):
    page.goto('https://the-internet.herokuapp.com/download')
    link = page.locator('.example a').first
    file_name = link.text_content()

    # Starts waiting for the download before the click, and waits for it to start after the click
    with page.expect_download() as download_info:
        link.click()
    download = download_info.value
    assert download.suggested_filename == file_name

    # Copies the file from the remote browser to a folder on this machine
    downloaded_file = tmp_path / download.suggested_filename
    download.save_as(downloaded_file)
    assert downloaded_file.stat().st_size > 0
