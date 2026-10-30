from selenium.webdriver.common.by import By
from selenium.webdriver.support import expected_conditions
from selenium.webdriver.support.ui import WebDriverWait


def dues(driver):
    return [float(due.text.replace('$', '')) for due in driver.find_elements(By.CSS_SELECTOR, '#table2 tbody .dues')]


def wait_for_sort(driver, header, sort_class):
    # Waits until the header has the class of the sort order, which tells that the table is sorted
    WebDriverWait(driver, 5).until(
        expected_conditions.text_to_be_present_in_element_attribute((By.CSS_SELECTOR, header), 'class', sort_class))


def test_ascending_order(driver):
    driver.find_element(By.CSS_SELECTOR, '#table2 thead .dues').click()
    wait_for_sort(driver, '#table2 thead th:has(.dues)', 'headerSortDown')
    due_values = dues(driver)
    assert due_values == sorted(due_values)


def test_descending_order(driver):
    driver.find_element(By.CSS_SELECTOR, '#table2 thead .dues').click()
    driver.find_element(By.CSS_SELECTOR, '#table2 thead .dues').click()
    wait_for_sort(driver, '#table2 thead th:has(.dues)', 'headerSortUp')
    due_values = dues(driver)
    assert due_values == sorted(due_values, reverse=True)
