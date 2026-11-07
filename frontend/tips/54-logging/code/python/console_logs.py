import pytest
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait


@pytest.fixture
def driver():
    options = webdriver.ChromeOptions()
    # Turns on WebDriver BiDi, which sends the console messages and errors of the page to the test
    options.enable_bidi = True
    driver = webdriver.Chrome(options=options)
    yield driver
    driver.quit()


def test_console_messages_and_errors(driver):
    messages = []
    errors = []
    driver.script.add_console_message_handler(lambda entry: messages.append(f'{entry.level}: {entry.text}'))
    driver.script.add_javascript_error_handler(lambda entry: errors.append(entry.text))

    driver.get('https://the-internet.herokuapp.com/network_console')
    driver.find_element(By.ID, 'log-console').click()
    driver.find_element(By.ID, 'throw-error').click()

    wait = WebDriverWait(driver, 5)
    wait.until(lambda _: len(messages) == 3 and len(errors) == 1)
    # The messages can arrive in any order
    assert set(messages) == {
        'info: the-internet: a log message',
        'warn: the-internet: a warning',
        'error: the-internet: an error message',
    }
    assert errors == ['Error: the-internet: thrown on purpose']
