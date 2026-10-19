import csv
import os
import pytest
from vibium import browser


def user_data():
    with open(os.path.join(os.path.dirname(__file__), 'user_data.csv'), newline='') as file:
        return list(csv.DictReader(file))


@pytest.fixture
def page():
    bro = browser.start()
    yield bro.page()
    bro.stop()


@pytest.mark.parametrize('user', user_data(), ids=lambda user: user['account_type'])
def test_login(page, user):
    page.go('https://the-internet.herokuapp.com/login')
    page.find('#username').fill(user['username'])
    page.find('#password').fill(user['password'])
    page.find('#login button').click()

    notification = page.find('#flash').text()
    assert notification.startswith(user['notification_message']), notification
