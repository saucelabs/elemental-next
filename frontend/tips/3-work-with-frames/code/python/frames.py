import pytest
from selenium import webdriver
from selenium.webdriver.common.by import By

@pytest.fixture
def driver_setup_teardown():
    driver = webdriver.Firefox()
    yield driver
    driver.quit()

def test_example_1(driver_setup_teardown):
    driver = driver_setup_teardown
    driver.get('https://the-internet.herokuapp.com/nested_frames')
    driver.switch_to.frame('frame-top')
    driver.switch_to.frame('frame-middle')
    assert driver.find_element(By.ID, 'content').text == "MIDDLE", "content should be MIDDLE"

def test_example_2(driver_setup_teardown):
    driver = driver_setup_teardown
    driver.get('https://the-internet.herokuapp.com/tinymce')
    driver.switch_to.frame('mce_0_ifr')
    editor = driver.find_element(By.ID, 'tinymce')
    before_text = editor.text
    editor.clear()
    editor.send_keys('Hello World!')
    after_text = editor.text
    assert after_text != before_text, "%s equals %s" % (before_text, after_text)
    driver.switch_to.default_content()
    assert driver.find_element(By.CSS_SELECTOR, 'h3').text != "", "h3 element should not be empty"