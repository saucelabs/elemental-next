import pytest
from playwright.sync_api import Page


@pytest.mark.parametrize('expected', [200, 301, 404, 500])
def test_retrieve_status_code(page: Page, expected):
    response = page.goto(f'https://the-internet.herokuapp.com/status_codes/{expected}')

    assert response.status == expected
