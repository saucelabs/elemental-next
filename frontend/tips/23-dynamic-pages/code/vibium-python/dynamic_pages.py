import pytest
from vibium import browser


@pytest.fixture
def page():
    bro = browser.start()
    yield bro.page()
    bro.stop()


@pytest.mark.parametrize('example', ['1', '2'], ids=['a hidden element', 'an element rendered after'])
def test_waits_for_the_element(page, example):
    page.go(f'https://the-internet.herokuapp.com/dynamic_loading/{example}')
    page.find('#start button').click()

    page.find('#finish').wait_until('visible', timeout=10000)
    assert page.find('#finish').is_visible()
