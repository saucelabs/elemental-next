import os
from concurrent.futures import ThreadPoolExecutor
import pytest
from vibium import browser
from sauce import start_session, end_session

BROWSERS = ['chrome', 'firefox', 'MicrosoftEdge']


def run_on(browser_name):
    session = start_session(browser_name, f'Elemental Selenium - Tip 42 - Vibium Python - {browser_name}')
    bro = browser.start(session['web_socket_url'])
    passed = False
    try:
        page = bro.page()
        page.go('https://the-internet.herokuapp.com')
        assert page.title() == 'The Internet'
        passed = True
    finally:
        bro.stop()
        end_session(session, passed)


def test_loads_the_page_on_every_browser():
    if not os.environ.get('SAUCE_USERNAME') or not os.environ.get('SAUCE_ACCESS_KEY'):
        pytest.skip('Set SAUCE_USERNAME and SAUCE_ACCESS_KEY to run this test on Sauce Labs')

    with ThreadPoolExecutor(max_workers=len(BROWSERS)) as executor:
        # list() waits for every browser, and raises the error of the first one that failed
        list(executor.map(run_on, BROWSERS))
