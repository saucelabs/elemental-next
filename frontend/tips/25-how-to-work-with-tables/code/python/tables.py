import pytest
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support import expected_conditions
from selenium.webdriver.support.ui import WebDriverWait


@pytest.fixture
def driver():
    driver = webdriver.Firefox()
    driver.get('https://the-internet.herokuapp.com/tables')
    yield driver
    driver.quit()


def dues(driver, locator):
    return [float(due.text.replace('$', '')) for due in driver.find_elements(By.CSS_SELECTOR, locator)]


def wait_for_sort(driver, header, sort_class):
    # Waits until the header has the class of the sort order, which tells that the table is sorted
    WebDriverWait(driver, 5).until(
        expected_conditions.text_to_be_present_in_element_attribute((By.CSS_SELECTOR, header), 'class', sort_class))


def test_sort_number_ascending(driver):
    driver.find_element(By.CSS_SELECTOR, '#table1 thead tr th:nth-of-type(4)').click()
    wait_for_sort(driver, '#table1 thead tr th:nth-of-type(4)', 'headerSortDown')
    due_values = dues(driver, '#table1 tbody tr td:nth-of-type(4)')
    assert due_values == sorted(due_values)


def test_sort_number_descending(driver):
    driver.find_element(By.CSS_SELECTOR, '#table1 thead tr th:nth-of-type(4)').click()
    driver.find_element(By.CSS_SELECTOR, '#table1 thead tr th:nth-of-type(4)').click()
    wait_for_sort(driver, '#table1 thead tr th:nth-of-type(4)', 'headerSortUp')
    due_values = dues(driver, '#table1 tbody tr td:nth-of-type(4)')
    assert due_values == sorted(due_values, reverse=True)


def test_sort_text_ascending(driver):
    driver.find_element(By.CSS_SELECTOR, '#table1 thead tr th:nth-of-type(3)').click()
    wait_for_sort(driver, '#table1 thead tr th:nth-of-type(3)', 'headerSortDown')
    emails = [email.text for email in driver.find_elements(By.CSS_SELECTOR, '#table1 tbody tr td:nth-of-type(3)')]
    assert emails == sorted(emails)


def test_sort_number_ascending_with_semantic_locators(driver):
    driver.find_element(By.CSS_SELECTOR, '#table2 thead .dues').click()
    wait_for_sort(driver, '#table2 thead th:has(.dues)', 'headerSortDown')
    due_values = dues(driver, '#table2 tbody .dues')
    assert due_values == sorted(due_values)
