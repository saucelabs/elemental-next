import pytest
from playwright.sync_api import Page


@pytest.fixture(autouse=True)
def visit_broken_images_page(page: Page):
    page.goto('https://the-internet.herokuapp.com/broken_images')


def test_find_with_http_request(page: Page):
    sources = page.locator('img').evaluate_all('images => images.map(image => image.src)')
    broken_images = []
    for source in sources:
        response = page.request.get(source)
        if response.status != 200:
            broken_images.append(source)
    print(broken_images)
    assert [source.split('/')[-1] for source in broken_images] == ['asdf.jpg', 'hjkl.jpg']


def test_find_with_javascript(page: Page):
    sources = page.locator('img').evaluate_all("""images => images
        .filter(image => !(image.complete && image.naturalWidth > 0))
        .map(image => image.getAttribute('src'))""")
    print(sources)
    assert sources == ['asdf.jpg', 'hjkl.jpg']
