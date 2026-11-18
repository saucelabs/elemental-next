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
    page.find(css='#username').fill('tomsmith')
    page.find(css='#password').fill('SuperSecretPassword!')
    page.find(css='button[type=submit]').click()
    assert page.find(css='#flash').text().startswith('You logged into a secure area!')
