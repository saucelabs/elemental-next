import pytest
from vibium import browser


@pytest.fixture
def page():
    bro = browser.start()
    yield bro.page()
    bro.stop()


def test_pick_a_fruit(page):
    page.go('https://the-internet.herokuapp.com/custom_dropdown')

    page.find(role='combobox', label='Fruit').click()
    page.find(role='option', text='Mango').click()

    assert page.find(role='combobox', label='Fruit').text() == 'Mango'
    assert page.find('#result').text() == 'Selected: mango'
