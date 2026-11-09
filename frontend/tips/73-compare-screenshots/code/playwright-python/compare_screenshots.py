import io
from PIL import Image, ImageChops
from playwright.sync_api import Page

URL = 'https://the-internet.herokuapp.com/visual_diff'


def card_screenshot(page: Page, url):
    page.goto(url)
    png = page.locator('#card').screenshot()
    return Image.open(io.BytesIO(png)).convert('RGB')


def different_pixels(image, other):
    # Images of different sizes differ everywhere
    if image.size != other.size:
        return image.width * image.height
    # The difference is black (0) where the pixels are the same. The histogram counts the pixels of each value
    difference = ImageChops.difference(image, other).convert('L')
    return sum(difference.histogram()[1:])


def test_the_same_card_has_no_differences(page: Page):
    baseline = card_screenshot(page, URL)

    assert different_pixels(baseline, card_screenshot(page, URL)) == 0


def test_a_moved_button_is_noticed(page: Page):
    baseline = card_screenshot(page, URL)

    assert different_pixels(baseline, card_screenshot(page, f'{URL}?shift=10')) > 0
