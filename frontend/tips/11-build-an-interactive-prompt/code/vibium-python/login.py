import pytest
from vibium import browser


@pytest.fixture
def page():
    bro = browser.start()
    yield bro.page()
    bro.stop()


# Each step is one of the commands that worked in the Vibium CLI session of the tip
def test_login(page):
    page.go('https://the-internet.herokuapp.com')
    page.find(role='link', text='Form Authentication').click()
    page.find('#username').fill('tomsmith')
    page.find('#password').fill('SuperSecretPassword!')
    page.find('button[type=submit]').click()
    assert page.find('#flash').text().startswith('You logged into a secure area!')
