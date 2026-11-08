import urllib.request
import pytest
from vibium import browser

AXE_CORE = 'https://cdn.jsdelivr.net/npm/axe-core@4.14.0/axe.min.js'
# Rules the page breaks on purpose
KNOWN_ISSUES = {'image-alt', 'label', 'select-name', 'button-name', 'link-name', 'aria-roles', 'heading-order'}


@pytest.fixture(scope='module')
def axe_source():
    with urllib.request.urlopen(AXE_CORE) as response:
        return response.read().decode()


@pytest.fixture
def page():
    bro = browser.start()
    yield bro.page()
    bro.stop()


def scan(page, axe_source):
    # Adds axe-core to the page, then runs it there on the part of the page with the examples
    page.evaluate(axe_source)
    results = page.evaluate('axe.run("#widgets")')
    return {violation['id'] for violation in results['violations']}


def test_the_page_has_the_known_issues(page, axe_source):
    page.go('https://the-internet.herokuapp.com/accessibility_issues')

    assert KNOWN_ISSUES <= scan(page, axe_source)


def test_the_fixed_page_has_no_issues(page, axe_source):
    page.go('https://the-internet.herokuapp.com/accessibility_issues?fixed=true')

    assert scan(page, axe_source) == set()
