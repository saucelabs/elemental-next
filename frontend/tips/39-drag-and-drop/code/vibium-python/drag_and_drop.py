import pytest
from vibium import browser


@pytest.fixture
def page():
    bro = browser.start()
    yield bro.page()
    bro.stop()


def test_swaps_the_columns(page):
    page.go('https://the-internet.herokuapp.com/drag_and_drop')

    page.find(css='#column-a').drag_to(page.find(css='#column-b'))

    assert page.find(css='#column-a').text() == 'B'
    assert page.find(css='#column-b').text() == 'A'
