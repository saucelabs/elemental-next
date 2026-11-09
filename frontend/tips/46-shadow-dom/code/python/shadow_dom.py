import pytest
from selenium import webdriver
from selenium.webdriver.common.by import By


@pytest.fixture
def driver():
    driver = webdriver.Firefox()
    yield driver
    driver.quit()


def test_click_a_button_inside_nested_shadow_roots(driver):
    driver.get('https://the-internet.herokuapp.com/shadowdom_advanced')

    outer_root = driver.find_element(By.ID, 'outer-card').shadow_root
    inner_root = outer_root.find_element(By.CSS_SELECTOR, '#inner-card').shadow_root
    inner_root.find_element(By.CSS_SELECTOR, '#inner-button').click()

    assert driver.find_element(By.ID, 'nested-result').text == 'You clicked the button in the inner shadow root'


def test_a_normal_locator_does_not_find_it(driver):
    driver.get('https://the-internet.herokuapp.com/shadowdom_advanced')

    assert driver.find_elements(By.CSS_SELECTOR, '#inner-button') == []
