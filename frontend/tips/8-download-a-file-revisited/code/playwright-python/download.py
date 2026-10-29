from urllib.parse import urljoin
from playwright.sync_api import Page


def test_file_can_be_downloaded(page: Page):
    page.goto('https://the-internet.herokuapp.com/download')
    link = page.locator('.example a').first.get_attribute('href')

    response = page.request.head(urljoin(page.url, link))

    assert 'attachment' in response.headers['content-disposition']
    assert int(response.headers['content-length']) > 0
