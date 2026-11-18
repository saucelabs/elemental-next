import pytest
from vibium import browser
from vibium.errors import ElementNotFoundError


def is_displayed(page, selector):
    try:
        return page.find(css=selector, timeout=2000).is_visible()
    except ElementNotFoundError:
        # page.find raises an ElementNotFoundError when the element doesn't show up in time
        return False


@pytest.fixture
def page():
    bro = browser.start()
    page = bro.page()
    page.go('https://the-internet.herokuapp.com/login')
    page.find(css='#username').fill('tomsmith')
    page.find(css='#password').fill('SuperSecretPassword!')
    page.find(css='#login button').click()
    page.find(css='.flash.success').wait_until('visible')
    yield page
    bro.stop()


def test_raises_an_error_when_acting_on_a_missing_element(page):
    with pytest.raises(ElementNotFoundError):
        page.find(css='#login', timeout=2000).click()


def test_does_not_display_the_login_form(page):
    assert not is_displayed(page, '#login')
