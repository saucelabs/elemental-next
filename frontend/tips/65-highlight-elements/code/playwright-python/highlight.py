import re
import pytest
from playwright.sync_api import Locator, Page, expect

HIGHLIGHT_STYLE = 'border: 2px solid red; border-style: dashed;'


def highlight(element: Locator, duration=3):
    # store the original style so it can be reset later
    original_style = element.get_attribute('style') or ''
    # style the element with a red dashed border
    element.evaluate('(el, style) => el.setAttribute("style", style)', HIGHLIGHT_STYLE)
    # keep the element highlighted for a spell and then revert
    if duration > 0:
        element.page.wait_for_timeout(duration * 1000)
        element.evaluate('(el, style) => el.setAttribute("style", style)', original_style)


@pytest.fixture(autouse=True)
def visit_large_page(page: Page):
    page.goto('https://the-internet.herokuapp.com/large')


def test_highlight_element(page: Page):
    element = page.locator('[id="sibling-2.3"]')
    highlight(element, 0)
    expect(element).to_have_attribute('style', re.compile('dashed'))


def test_revert_style_afterward(page: Page):
    element = page.locator('[id="sibling-2.3"]')
    highlight(element, 1)
    expect(element).not_to_have_attribute('style', re.compile('dashed'))
