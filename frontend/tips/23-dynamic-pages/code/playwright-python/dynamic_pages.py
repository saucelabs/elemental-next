import pytest
from playwright.sync_api import Page, expect


@pytest.mark.parametrize('example', ['1', '2'], ids=['a hidden element', 'an element rendered after'])
def test_wait_for_element(page: Page, example):
    page.goto(f'https://the-internet.herokuapp.com/dynamic_loading/{example}')
    page.locator('#start button').click()

    expect(page.locator('#finish')).to_be_visible(timeout=10000)
