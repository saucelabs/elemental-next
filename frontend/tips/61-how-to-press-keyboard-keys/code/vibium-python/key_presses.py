import pytest
from vibium import browser


@pytest.fixture
def page():
    bro = browser.start()
    page = bro.page()
    page.go('https://the-internet.herokuapp.com/key_presses')
    yield page
    bro.stop()


def test_sends_keys_to_an_element(page):
    page.find('#target').press('Space')
    assert page.find('#result').text() == 'You entered: SPACE'


def test_sends_keys_without_an_element(page):
    page.keyboard.press('Tab')
    assert page.find('#result').text() == 'You entered: TAB'
