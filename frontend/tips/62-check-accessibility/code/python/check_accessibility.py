import pytest
from axe_selenium_python import Axe
from selenium import webdriver

# Rules the page breaks on purpose
KNOWN_ISSUES = {'image-alt', 'label', 'select-name', 'button-name', 'link-name', 'aria-roles', 'heading-order'}


@pytest.fixture
def driver():
    driver = webdriver.Firefox()
    yield driver
    driver.quit()


def scan(driver):
    axe = Axe(driver)
    axe.inject()
    # Checks only the part of the page with the examples
    results = axe.run(context='#widgets')
    return {violation['id'] for violation in results['violations']}


def test_the_page_has_the_known_issues(driver):
    driver.get('https://the-internet.herokuapp.com/accessibility_issues')

    assert KNOWN_ISSUES <= scan(driver)


def test_the_fixed_page_has_no_issues(driver):
    driver.get('https://the-internet.herokuapp.com/accessibility_issues?fixed=true')

    assert scan(driver) == set()
