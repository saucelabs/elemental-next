import pytest
from selenium import webdriver
from selenium.webdriver.common.action_chains import ActionChains
from selenium.webdriver.common.by import By


@pytest.fixture
def driver():
    driver = webdriver.Firefox()
    yield driver
    driver.quit()


def test_hover(driver):
    driver.get('https://the-internet.herokuapp.com/hovers')
    an_avatar = driver.find_element(By.CLASS_NAME, 'figure')
    caption = an_avatar.find_element(By.CLASS_NAME, 'figcaption')
    assert not caption.is_displayed()

    ActionChains(driver).move_to_element(an_avatar).perform()
    assert caption.is_displayed()
