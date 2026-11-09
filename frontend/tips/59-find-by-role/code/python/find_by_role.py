import pytest
from selenium import webdriver
from selenium.webdriver.common.by import By


@pytest.fixture
def driver():
    driver = webdriver.Firefox()
    yield driver
    driver.quit()


def find_by_role(driver, role, name):
    # The browser computes the role and the accessible name of each element, as a screen reader sees them
    for element in driver.find_elements(By.CSS_SELECTOR, f'[role="{role}"]'):
        if element.aria_role == role and element.accessible_name == name:
            return element
    raise AssertionError(f'No {role} named "{name}"')


def test_pick_a_fruit(driver):
    driver.get('https://the-internet.herokuapp.com/custom_dropdown')

    find_by_role(driver, 'combobox', 'Fruit').click()
    find_by_role(driver, 'option', 'Mango').click()

    assert find_by_role(driver, 'combobox', 'Fruit').text == 'Mango'
    assert driver.find_element(By.ID, 'result').text == 'Selected: mango'
