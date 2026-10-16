from selenium.webdriver.common.by import By


def dues(driver):
    return [float(due.text.replace('$', '')) for due in driver.find_elements(By.CSS_SELECTOR, '#table2 tbody .dues')]


def test_ascending_order(driver):
    driver.find_element(By.CSS_SELECTOR, '#table2 thead .dues').click()
    due_values = dues(driver)
    assert due_values == sorted(due_values)


def test_descending_order(driver):
    driver.find_element(By.CSS_SELECTOR, '#table2 thead .dues').click()
    driver.find_element(By.CSS_SELECTOR, '#table2 thead .dues').click()
    due_values = dues(driver)
    assert due_values == sorted(due_values, reverse=True)
