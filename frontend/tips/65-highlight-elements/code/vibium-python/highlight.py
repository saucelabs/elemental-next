import pytest
from vibium import browser

HIGHLIGHT_STYLE = 'border: 2px solid red; border-style: dashed;'


def highlight(page, selector, duration=3):
    element = f"document.querySelector('{selector}')"
    # store the original style so it can be reset later
    original_style = page.find(selector).attr('style') or ''
    # style the element with a red dashed border
    page.evaluate(f"{element}.setAttribute('style', '{HIGHLIGHT_STYLE}')")
    # keep the element highlighted for a spell and then revert
    if duration > 0:
        page.wait(duration * 1000)
        page.evaluate(f"{element}.setAttribute('style', '{original_style}')")


@pytest.fixture
def page():
    bro = browser.start()
    page = bro.page()
    page.go('https://the-internet.herokuapp.com/large')
    yield page
    bro.stop()


def test_highlights_an_element(page):
    highlight(page, '[id="sibling-2.3"]', 0)
    assert 'dashed' in page.find('[id="sibling-2.3"]').attr('style')


def test_reverts_the_style_afterward(page):
    highlight(page, '[id="sibling-2.3"]', 1)
    assert 'dashed' not in (page.find('[id="sibling-2.3"]').attr('style') or '')
