import pytest
from vibium import browser


@pytest.fixture
def page():
    bro = browser.start()
    page = bro.page()
    page.go('https://the-internet.herokuapp.com/javascript_alerts')
    yield page
    bro.stop()


def test_accepts_the_confirmation(page):
    page.on_dialog(lambda dialog: dialog.accept())
    page.find(role='button', text='Click for JS Confirm').click()

    assert page.find('#result').text() == 'You clicked: Ok'


def test_dismisses_the_confirmation(page):
    page.on_dialog(lambda dialog: dialog.dismiss())
    page.find(role='button', text='Click for JS Confirm').click()

    assert page.find('#result').text() == 'You clicked: Cancel'
