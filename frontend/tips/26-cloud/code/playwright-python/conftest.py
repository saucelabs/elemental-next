import os
from importlib.metadata import version
import pytest

SAUCE_URL = 'https://ondemand.us-west-1.saucelabs.com'
SAUCE_API_URL = 'https://api.us-west-1.saucelabs.com'
USERNAME = os.environ.get('SAUCE_USERNAME', '')
ACCESS_KEY = os.environ.get('SAUCE_ACCESS_KEY', '')
# Sauce Labs needs the major and minor version of Playwright, e.g. "1.61"
PLAYWRIGHT_VERSION = '.'.join(version('playwright').split('.')[:2])


@pytest.hookimpl(wrapper=True)
def pytest_runtest_makereport(item):
    # Keeps the result of the test, so the browser fixture can send it to Sauce Labs
    report = yield
    if report.when == 'call':
        item.passed = report.passed
    return report


# Gives each test a browser that runs on Sauce Labs, instead of on this machine
@pytest.fixture
def browser(request, playwright, browser_type):
    api = playwright.request.new_context(
        http_credentials={'username': USERNAME, 'password': ACCESS_KEY, 'send': 'always'})

    # Asks Sauce Labs for a browser. It redirects (303) until the browser is ready
    response = api.post(f'{SAUCE_URL}/playwright/session', data={
        'browserName': 'chrome',
        'platformName': 'Linux',
        'playwrightVersion': PLAYWRIGHT_VERSION,
        'sauce:options': {'name': request.node.name, 'build': 'Elemental Selenium - Tip 26 - Playwright Python'},
    }, max_redirects=0)
    while response.status == 303:
        response = api.get(response.headers['location'], max_redirects=0)
    session = response.json()['value']

    # Connects to the browser with the Playwright protocol
    remote_browser = browser_type.connect(f"{session['wsEndpoint']}?browser={browser_type.name}")
    yield remote_browser
    remote_browser.close()

    # Marks the job as passed or failed on Sauce Labs
    api.put(f"{SAUCE_API_URL}/rest/v1/{USERNAME}/jobs/{session['sessionId']}",
            data={'passed': getattr(request.node, 'passed', False)})
    api.dispose()
    print(f"See the job at https://app.saucelabs.com/tests/{session['sessionId']}")
