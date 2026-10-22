import os
import pytest
from vibium import browser
from sauce import start_session, end_session


@pytest.fixture
def page(request):
    if not os.environ.get('SAUCE_USERNAME') or not os.environ.get('SAUCE_ACCESS_KEY'):
        pytest.skip('Set SAUCE_USERNAME and SAUCE_ACCESS_KEY to run this test on Sauce Labs')

    session = start_session('chrome', 'Elemental Selenium - Tip 26 - Vibium Python')
    bro = browser.start(session['web_socket_url'])
    yield bro.page()
    bro.stop()
    end_session(session, request.node.report_call.passed)


def test_loads_the_page(page):
    page.go('https://the-internet.herokuapp.com')
    assert 'The Internet' in page.title()
