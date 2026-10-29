import pytest
from playwright.sync_api import Page, expect


@pytest.mark.smoke
def test_has_the_right_title(page: Page):
    page.goto('https://the-internet.herokuapp.com')
    expect(page).to_have_title('The Internet')


# This test is not finished yet, so it fails. Since it's marked as wip, it doesn't run with `-m smoke`.
@pytest.mark.wip
def test_work_in_progress(page: Page):
    page.goto('https://the-internet.herokuapp.com')
    expect(page).to_have_title('Not finished yet')
