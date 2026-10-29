import pytest
from playwright.sync_api import Page


@pytest.fixture(autouse=True)
def visit_download_page(page: Page):
    page.goto('https://the-internet.herokuapp.com/download')


def test_first_link_on_the_page(page: Page):
    link = page.locator('a').first.get_attribute('href')
    print(link)
    assert 'github.com' in link


def test_first_link_in_the_content(page: Page):
    link = page.locator('#content a').first.get_attribute('href')
    print(link)
    assert 'download/' in link


def test_first_link_in_the_example(page: Page):
    link = page.locator('#content .example a').first.get_attribute('href')
    print(link)
    assert 'download/' in link
