from axe_playwright_python.sync_playwright import Axe
from playwright.sync_api import Page

# Rules the page breaks on purpose
KNOWN_ISSUES = {'image-alt', 'label', 'select-name', 'button-name', 'link-name', 'aria-roles', 'heading-order'}


def scan(page: Page):
    # Checks only the part of the page with the examples
    results = Axe().run(page, context='#widgets')
    return {violation['id'] for violation in results.response['violations']}


def test_the_page_has_the_known_issues(page: Page):
    page.goto('https://the-internet.herokuapp.com/accessibility_issues')

    assert KNOWN_ISSUES <= scan(page)


def test_the_fixed_page_has_no_issues(page: Page):
    page.goto('https://the-internet.herokuapp.com/accessibility_issues?fixed=true')

    assert scan(page) == set()
