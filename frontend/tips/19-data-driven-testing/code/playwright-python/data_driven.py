import csv
import os
import pytest
from playwright.sync_api import Page, expect


def user_data():
    with open(os.path.join(os.path.dirname(__file__), 'user_data.csv'), newline='') as file:
        return list(csv.DictReader(file))


@pytest.mark.parametrize('user', user_data(), ids=lambda user: user['account_type'])
def test_login(page: Page, user):
    page.goto('https://the-internet.herokuapp.com/login')
    page.locator('#username').fill(user['username'])
    page.locator('#password').fill(user['password'])
    page.locator('#login button').click()

    expect(page.locator('#flash')).to_contain_text(user['notification_message'])
