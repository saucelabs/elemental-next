from selenium.webdriver.common.by import By
from selenium.webdriver.support import expected_conditions
from selenium.webdriver.support.ui import WebDriverWait


def dues(driver):
    cells = driver.find_elements(By.CSS_SELECTOR, '#table1 tbody tr td:nth-of-type(4)')
    return [float(due.text.replace('$', '')) for due in cells]


def wait_for_sort(driver, header, sort_class):
    # Waits until the header has the class of the sort order, which tells that the table is sorted
    WebDriverWait(driver, 5).until(
        expected_conditions.text_to_be_present_in_element_attribute((By.CSS_SELECTOR, header), 'class', sort_class))


def test_ascending_order(driver):
    driver.find_element(By.CSS_SELECTOR, '#table1 thead tr th:nth-of-type(4)').click()
    wait_for_sort(driver, '#table1 thead tr th:nth-of-type(4)', 'headerSortDown')
    due_values = dues(driver)
    assert due_values == sorted(due_values)


def test_descending_order(driver):
    driver.find_element(By.CSS_SELECTOR, '#table1 thead tr th:nth-of-type(4)').click()
    driver.find_element(By.CSS_SELECTOR, '#table1 thead tr th:nth-of-type(4)').click()
    wait_for_sort(driver, '#table1 thead tr th:nth-of-type(4)', 'headerSortUp')
    due_values = dues(driver)
    assert due_values == sorted(due_values, reverse=True)
