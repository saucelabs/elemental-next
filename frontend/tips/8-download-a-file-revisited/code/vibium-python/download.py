import urllib.request
from urllib.parse import urljoin
import pytest
from vibium import browser


@pytest.fixture
def page():
    bro = browser.start()
    yield bro.page()
    bro.stop()


def test_file_can_be_downloaded(page):
    page.go('https://the-internet.herokuapp.com/download')
    link = urljoin(page.url(), page.find('.example a').attr('href'))

    request = urllib.request.Request(link, method='HEAD')
    with urllib.request.urlopen(request) as response:
        content_disposition = response.headers['Content-Disposition']
        content_length = int(response.headers['Content-Length'])

    assert content_disposition.startswith('attachment')
    assert content_length > 0
