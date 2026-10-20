import json
import os
import urllib.request
import pytest
from vibium import browser

GRID_URL = os.environ.get('GRID_URL', 'http://localhost:4444')


def grid_is_running():
    try:
        with urllib.request.urlopen(f'{GRID_URL}/status') as response:
            return response.status == 200
    except OSError:
        return False


def grid_request(method, path, body=None):
    request = urllib.request.Request(
        GRID_URL + path,
        method=method,
        data=json.dumps(body).encode() if body is not None else None,
        headers={'Content-Type': 'application/json; charset=utf-8'},
    )
    with urllib.request.urlopen(request) as response:
        return json.load(response)['value']


# Vibium speaks WebDriver BiDi. We ask the Grid for a session with a BiDi WebSocket (webSocketUrl: true), and then
# connect Vibium to it.
def new_grid_session():
    value = grid_request('POST', '/session', {
        'capabilities': {'alwaysMatch': {'browserName': 'chrome', 'webSocketUrl': True}},
    })
    return {'session_id': value['sessionId'], 'web_socket_url': value['capabilities']['webSocketUrl']}


@pytest.fixture
def page():
    if not grid_is_running():
        pytest.skip(f'Start a Selenium Grid on {GRID_URL} (or set GRID_URL) to run this test')

    session = new_grid_session()
    bro = browser.start(session['web_socket_url'])
    yield bro.page()
    bro.stop()
    # Ends the session on the Grid
    grid_request('DELETE', f"/session/{session['session_id']}")


def test_loads_the_page(page):
    page.go('https://the-internet.herokuapp.com')
    assert page.title() == 'The Internet'
