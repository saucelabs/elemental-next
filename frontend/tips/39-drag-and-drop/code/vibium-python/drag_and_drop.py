import pytest
from vibium import browser


@pytest.fixture
def page():
    bro = browser.start()
    yield bro.page()
    bro.stop()


def test_swaps_the_columns(page):
    page.go('https://the-internet.herokuapp.com/drag_and_drop')

    page.find('#column-a').drag_to(page.find('#column-b'))

    assert page.find('#column-a').text() == 'B'
    assert page.find('#column-b').text() == 'A'
