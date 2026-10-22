import os
import pytest
from vibium import browser
from sauce import start_session, end_session

BROWSERS = ['chrome', 'firefox', 'MicrosoftEdge']


@pytest.fixture
def page(request, browser_name):
    if not os.environ.get('SAUCE_USERNAME') or not os.environ.get('SAUCE_ACCESS_KEY'):
        pytest.skip('Set SAUCE_USERNAME and SAUCE_ACCESS_KEY to run this test on Sauce Labs')

    session = start_session(browser_name, f'Elemental Selenium - Tip 41 - Vibium Python - {browser_name}')
    bro = browser.start(session['web_socket_url'])
    yield bro.page()
    bro.stop()
    end_session(session, request.node.report_call.passed)


@pytest.mark.parametrize('browser_name', BROWSERS)
def test_loads_the_page(page, browser_name):
    page.go('https://the-internet.herokuapp.com')
    assert page.title() == 'The Internet'
