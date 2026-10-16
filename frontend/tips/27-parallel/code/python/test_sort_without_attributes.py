from selenium.webdriver.common.by import By


def dues(driver):
    cells = driver.find_elements(By.CSS_SELECTOR, '#table1 tbody tr td:nth-of-type(4)')
    return [float(due.text.replace('$', '')) for due in cells]


def test_ascending_order(driver):
    driver.find_element(By.CSS_SELECTOR, '#table1 thead tr th:nth-of-type(4)').click()
    due_values = dues(driver)
    assert due_values == sorted(due_values)


def test_descending_order(driver):
    driver.find_element(By.CSS_SELECTOR, '#table1 thead tr th:nth-of-type(4)').click()
    driver.find_element(By.CSS_SELECTOR, '#table1 thead tr th:nth-of-type(4)').click()
    due_values = dues(driver)
    assert due_values == sorted(due_values, reverse=True)
