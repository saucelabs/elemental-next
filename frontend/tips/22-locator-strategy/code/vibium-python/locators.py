import pytest
from vibium import browser


@pytest.fixture
def page():
    bro = browser.start()
    yield bro.page()
    bro.stop()


def test_first_link_on_the_page(page):
    page.go('https://the-internet.herokuapp.com/download')
    link = page.find('a').attr('href')
    print(link)
    assert 'github.com' in link


def test_first_link_in_the_content(page):
    page.go('https://the-internet.herokuapp.com/download')
    link = page.find('#content a').attr('href')
    print(link)
    assert 'download/' in link


def test_first_link_in_the_example(page):
    page.go('https://the-internet.herokuapp.com/download')
    link = page.find('#content .example a').attr('href')
    print(link)
    assert 'download/' in link
