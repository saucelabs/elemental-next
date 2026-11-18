import pytest
from vibium import browser


@pytest.fixture
def page():
    bro = browser.start()
    yield bro.page()
    bro.stop()


def test_first_link_on_the_page(page):
    page.go('https://the-internet.herokuapp.com/download')
    link = page.find(css='a').attr('href')
    print(link)
    assert '#content' in link


def test_first_link_in_the_content(page):
    page.go('https://the-internet.herokuapp.com/download')
    link = page.find(css='#content a').attr('href')
    print(link)
    assert 'download/' in link


def test_first_link_in_the_example(page):
    page.go('https://the-internet.herokuapp.com/download')
    link = page.find(css='#content .example a').attr('href')
    print(link)
    assert 'download/' in link
