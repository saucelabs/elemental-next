import os
import pytest
from playwright.sync_api import Page, expect

pytestmark = pytest.mark.skipif(not os.environ.get('SAUCE_USERNAME') or not os.environ.get('SAUCE_ACCESS_KEY'),
                                reason='Set SAUCE_USERNAME and SAUCE_ACCESS_KEY to run this test on Sauce Labs')


def test_load_the_page(page: Page):
    page.goto('https://the-internet.herokuapp.com')
    expect(page).to_have_title('The Internet')
