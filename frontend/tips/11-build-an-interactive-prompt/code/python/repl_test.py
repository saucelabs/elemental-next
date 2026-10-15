import pytest
from selenium import webdriver
from repl import run_repl


@pytest.fixture
def driver():
    driver = webdriver.Firefox()
    yield driver
    driver.quit()


def test_repl(driver):
    commands = iter([
        "driver.get('https://the-internet.herokuapp.com')",
        "driver.title",
        "driver.find_element(By.ID, 'does-not-exist')",
        "q",
    ])
    output = []

    run_repl(driver, read=lambda prompt: next(commands), write=output.append)

    assert output[0] == 'The Internet'
    assert str(output[1]).startswith('NoSuchElementException')
    assert output[2] == 'Quitting...'
