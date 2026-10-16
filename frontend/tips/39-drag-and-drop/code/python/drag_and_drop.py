import os
import pytest
from selenium import webdriver
from selenium.webdriver.common.by import By


@pytest.fixture
def driver():
    driver = webdriver.Firefox()
    yield driver
    driver.quit()


def test_drag_and_drop(driver):
    driver.get('https://the-internet.herokuapp.com/drag_and_drop')
    with open(os.path.join(os.path.dirname(__file__), 'dnd.js')) as file:
        dnd_javascript = file.read()
    driver.execute_script(dnd_javascript + "$('#column-a').simulateDragDrop({ dropTarget: '#column-b'});")
    assert driver.find_element(By.ID, 'column-a').text == 'B'
    assert driver.find_element(By.ID, 'column-b').text == 'A'
