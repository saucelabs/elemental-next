import pytest
from vibium import browser


@pytest.fixture
def page():
    bro = browser.start()
    yield bro.page()
    bro.stop()


def test_dropdown(page):
    page.go('https://the-internet.herokuapp.com/dropdown')

    page.find('#dropdown').select_option('Option 1')

    assert page.find('#dropdown option:checked').text() == 'Option 1'
