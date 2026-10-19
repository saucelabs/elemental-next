import pytest
from vibium import browser
from vibium.errors import ElementNotFoundError

BASE_URL = 'https://the-internet.herokuapp.com/dynamic_loading'


@pytest.fixture
def page():
    bro = browser.start()
    yield bro.page()
    bro.stop()


@pytest.mark.parametrize('example', ['1', '2'])
def test_waits_for_the_element_to_be_visible(page, example):
    page.go(f'{BASE_URL}/{example}')
    page.find('#start button').click()

    page.find('#finish').wait_until('visible', timeout=10000)
    assert page.find('#finish').text() == 'Hello World!'


def test_gives_up_when_the_wait_is_too_short(page):
    page.go(f'{BASE_URL}/2')
    page.find('#start button').click()

    with pytest.raises(ElementNotFoundError):
        page.find('#finish', timeout=2000)
