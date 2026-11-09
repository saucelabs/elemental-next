import io
import pytest
from PIL import Image, ImageChops
from selenium import webdriver
from selenium.webdriver.common.by import By

URL = 'https://the-internet.herokuapp.com/visual_diff'


@pytest.fixture
def driver():
    driver = webdriver.Firefox()
    yield driver
    driver.quit()


def card_screenshot(driver, url):
    driver.get(url)
    png = driver.find_element(By.ID, 'card').screenshot_as_png
    return Image.open(io.BytesIO(png)).convert('RGB')


def different_pixels(image, other):
    # Images of different sizes differ everywhere
    if image.size != other.size:
        return image.width * image.height
    # The difference is black (0) where the pixels are the same. The histogram counts the pixels of each value
    difference = ImageChops.difference(image, other).convert('L')
    return sum(difference.histogram()[1:])


def test_the_same_card_has_no_differences(driver):
    baseline = card_screenshot(driver, URL)

    assert different_pixels(baseline, card_screenshot(driver, URL)) == 0


def test_a_moved_button_is_noticed(driver):
    baseline = card_screenshot(driver, URL)

    assert different_pixels(baseline, card_screenshot(driver, f'{URL}?shift=10')) > 0
