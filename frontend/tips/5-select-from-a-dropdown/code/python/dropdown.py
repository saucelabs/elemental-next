import pytest
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.select import Select as WebDriverSelect

@pytest.fixture
def driver_setup_teardown():
    driver = webdriver.Firefox()
    yield driver
    driver.quit()


def test_example_1(driver_setup_teardown):
    driver = driver_setup_teardown
    driver.get('https://the-internet.herokuapp.com/dropdown')
    dropdown_list = driver.find_element(By.ID , 'dropdown')
    options = dropdown_list.find_elements(By.TAG_NAME, 'option')
    for opt in options:
        if opt.text == 'Option 1':
            opt.click()
            break
    for opt in options:
        if opt.is_selected():
            selected_option = opt.text
            break
    assert selected_option == 'Option 1', "Selected option should be Option 1"

def test_example_2(driver_setup_teardown):
    driver = driver_setup_teardown
    driver.get('https://the-internet.herokuapp.com/dropdown')
    dropdown = driver.find_element(By.ID , 'dropdown')
    select_list = WebDriverSelect(dropdown)
    select_list.select_by_visible_text('Option 1')
    selected_option = select_list.first_selected_option.text
    assert selected_option == 'Option 1', "Selected option should be Option 1"