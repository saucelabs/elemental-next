import urllib.error
import urllib.request
from urllib.parse import urljoin
import pytest
from vibium import browser


@pytest.fixture
def page():
    bro = browser.start()
    page = bro.page()
    page.go('https://the-internet.herokuapp.com/broken_images')
    yield page
    bro.stop()


def status_of(url):
    try:
        with urllib.request.urlopen(url) as response:
            return response.status
    except urllib.error.HTTPError as error:
        return error.code


def test_broken_images_with_an_http_library(page):
    sources = [urljoin(page.url(), image.attr('src')) for image in page.find_all('img')]
    broken_images = [source for source in sources if status_of(source) != 200]
    print(broken_images)
    assert [source.split('/')[-1] for source in broken_images] == ['asdf.jpg', 'hjkl.jpg']


def test_broken_images_with_javascript(page):
    sources = page.evaluate("""
        Array.from(document.querySelectorAll('img'))
            .filter((img) => !(img.complete && img.naturalWidth > 0))
            .map((img) => img.getAttribute('src'))
    """)
    print(sources)
    assert sources == ['asdf.jpg', 'hjkl.jpg']
