import pytest
from vibium import browser


@pytest.fixture
def bro():
    bro = browser.start()
    yield bro
    bro.stop()


def test_new_tab(bro):
    page = bro.page()
    page.go('https://the-internet.herokuapp.com/windows')

    new_page = bro.new_page()
    new_page.go('https://the-internet.herokuapp.com/typos')

    assert len(bro.pages()) == 2
    assert new_page.find('h3').text() == 'Typos'
