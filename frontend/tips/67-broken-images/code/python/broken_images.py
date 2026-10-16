import urllib.error
import urllib.request
import pytest
from selenium import webdriver
from selenium.webdriver.common.by import By

LOADED_SCRIPT = ('return arguments[0].complete && typeof arguments[0].naturalWidth != "undefined" '
                 '&& arguments[0].naturalWidth > 0')


@pytest.fixture
def images():
    driver = webdriver.Firefox()
    driver.get('https://the-internet.herokuapp.com/broken_images')
    yield driver, driver.find_elements(By.TAG_NAME, 'img')
    driver.quit()


def status_code(url):
    try:
        with urllib.request.urlopen(url) as response:
            return response.status
    except urllib.error.HTTPError as error:
        return error.code


def test_broken_images_with_an_http_library(images):
    _, all_images = images
    sources = [image.get_attribute('src') for image in all_images]
    broken_images = [source for source in sources if status_code(source) != 200]
    print(broken_images)
    assert [source.split('/')[-1] for source in broken_images] == ['asdf.jpg', 'hjkl.jpg']


def test_broken_images_with_javascript(images):
    driver, all_images = images
    broken_images = [image for image in all_images if not driver.execute_script(LOADED_SCRIPT, image)]
    sources = [image.get_dom_attribute('src') for image in broken_images]
    print(sources)
    assert sources == ['asdf.jpg', 'hjkl.jpg']
