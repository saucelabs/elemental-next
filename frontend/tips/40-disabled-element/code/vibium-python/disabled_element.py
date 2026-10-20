import pytest
from vibium import browser


@pytest.fixture
def page():
    bro = browser.start()
    yield bro.page()
    bro.stop()


def test_finds_the_disabled_option(page):
    page.go('https://the-internet.herokuapp.com/dropdown')

    assert not page.find(role='option', text='Please select an option').is_enabled()
    assert page.find(role='option', text='Option 1').is_enabled()
