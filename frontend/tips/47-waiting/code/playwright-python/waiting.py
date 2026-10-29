import pytest
from playwright.sync_api import Page, TimeoutError, expect

BASE_URL = 'https://the-internet.herokuapp.com/dynamic_loading'


@pytest.mark.parametrize('example', ['1', '2'])
def test_wait_for_element_to_be_visible(page: Page, example):
    page.goto(f'{BASE_URL}/{example}')
    page.locator('#start button').click()

    page.locator('#finish').wait_for(state='visible', timeout=10000)
    assert 'Hello World!' in page.locator('#finish').text_content()


def test_give_up_when_wait_is_too_short(page: Page):
    page.goto(f'{BASE_URL}/2')
    page.locator('#start button').click()

    with pytest.raises(TimeoutError):
        page.locator('#finish').wait_for(state='visible', timeout=2000)


def test_wait_inside_assertion(page: Page):
    page.goto(f'{BASE_URL}/1')
    page.locator('#start button').click()

    expect(page.locator('#finish')).to_have_text('Hello World!', timeout=10000)
