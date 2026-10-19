import pytest
from vibium import browser


@pytest.fixture
def page():
    bro = browser.start()
    page = bro.page()
    page.go('https://the-internet.herokuapp.com/tables')
    yield page
    bro.stop()
