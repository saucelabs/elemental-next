import base64
import json
import os
import urllib.request

SAUCE_URL = 'https://ondemand.us-west-1.saucelabs.com/wd/hub'


def web_driver(method, path, body=None):
    credentials = f"{os.environ['SAUCE_USERNAME']}:{os.environ['SAUCE_ACCESS_KEY']}"
    request = urllib.request.Request(
        SAUCE_URL + path,
        method=method,
        data=json.dumps(body).encode() if body is not None else None,
        headers={
            'Authorization': f'Basic {base64.b64encode(credentials.encode()).decode()}',
            'Content-Type': 'application/json; charset=utf-8',
        },
    )
    with urllib.request.urlopen(request) as response:
        return json.load(response)['value']


# Vibium speaks WebDriver BiDi. We ask Sauce Labs for a session with a BiDi WebSocket (webSocketUrl: true), and then
# connect Vibium to it.
def start_session(browser_name, name):
    value = web_driver('POST', '/session', {
        'capabilities': {
            'alwaysMatch': {
                'browserName': browser_name,
                'browserVersion': 'latest',
                'platformName': 'Windows 11',
                'webSocketUrl': True,
                'sauce:options': {'name': name},
            },
        },
    })
    return {'session_id': value['sessionId'], 'web_socket_url': value['capabilities']['webSocketUrl']}


# Marks the job as passed or failed on Sauce Labs, and ends the session
def end_session(session, passed):
    web_driver('POST', f"/session/{session['session_id']}/execute/sync", {
        'script': f'sauce:job-result={str(passed).lower()}',
        'args': [],
    })
    web_driver('DELETE', f"/session/{session['session_id']}")
