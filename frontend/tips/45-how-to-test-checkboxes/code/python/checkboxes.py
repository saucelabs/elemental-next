import pytest
from selenium import webdriver
from selenium.webdriver.common.by import By


@pytest.fixture
def checkboxes():
    driver = webdriver.Firefox()
    driver.get('https://the-internet.herokuapp.com/checkboxes')
    yield driver.find_elements(By.CSS_SELECTOR, 'input[type="checkbox"]')
    driver.quit()


def test_attribute_lookup(checkboxes):
    print([checkbox.get_dom_attribute('checked') for checkbox in checkboxes])
    assert checkboxes[0].get_dom_attribute('checked') is None
    assert checkboxes[-1].get_dom_attribute('checked') is not None


def test_is_selected(checkboxes):
    print([checkbox.is_selected() for checkbox in checkboxes])
    assert not checkboxes[0].is_selected()
    assert checkboxes[-1].is_selected()
