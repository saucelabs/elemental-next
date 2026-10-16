import pytest
from selenium import webdriver
from selenium.webdriver.common.by import By


@pytest.fixture
def driver():
    driver = webdriver.Firefox()
    driver.get('https://the-internet.herokuapp.com/tables')
    yield driver
    driver.quit()


def dues(driver, locator):
    return [float(due.text.replace('$', '')) for due in driver.find_elements(By.CSS_SELECTOR, locator)]


def test_sort_number_ascending(driver):
    driver.find_element(By.CSS_SELECTOR, '#table1 thead tr th:nth-of-type(4)').click()
    due_values = dues(driver, '#table1 tbody tr td:nth-of-type(4)')
    assert due_values == sorted(due_values)


def test_sort_number_descending(driver):
    driver.find_element(By.CSS_SELECTOR, '#table1 thead tr th:nth-of-type(4)').click()
    driver.find_element(By.CSS_SELECTOR, '#table1 thead tr th:nth-of-type(4)').click()
    due_values = dues(driver, '#table1 tbody tr td:nth-of-type(4)')
    assert due_values == sorted(due_values, reverse=True)


def test_sort_text_ascending(driver):
    driver.find_element(By.CSS_SELECTOR, '#table1 thead tr th:nth-of-type(3)').click()
    emails = [email.text for email in driver.find_elements(By.CSS_SELECTOR, '#table1 tbody tr td:nth-of-type(3)')]
    assert emails == sorted(emails)


def test_sort_number_ascending_with_semantic_locators(driver):
    driver.find_element(By.CSS_SELECTOR, '#table2 thead .dues').click()
    due_values = dues(driver, '#table2 tbody .dues')
    assert due_values == sorted(due_values)
