import pytest
from vibium import browser


@pytest.fixture
def page():
    bro = browser.start()
    page = bro.page()
    page.go('https://the-internet.herokuapp.com/checkboxes')
    yield page
    bro.stop()


def test_checked_attribute(page):
    checkboxes = page.find_all('input[type="checkbox"]')
    print([checkbox.attr('checked') for checkbox in checkboxes])
    assert checkboxes[0].attr('checked') is None
    assert checkboxes[-1].attr('checked') is not None


def test_checkbox_is_checked(page):
    checkboxes = page.find_all('input[type="checkbox"]')
    assert not checkboxes[0].is_checked()
    assert checkboxes[-1].is_checked()
