import pytest
from playwright.sync_api import Page, expect


@pytest.fixture
def browser_context_args(browser_context_args):
    # The pytest-playwright plugin creates each browser context with these options
    return {
        **browser_context_args,
        'geolocation': {'latitude': 52.52, 'longitude': 13.405},
        'permissions': ['geolocation'],
        'timezone_id': 'Asia/Tokyo',
        'locale': 'de-DE',
    }


def test_geolocation(page: Page):
    page.goto('https://the-internet.herokuapp.com/geolocation')
    page.locator('button').click()

    expect(page.locator('#lat-value')).to_have_text('52.52')
    expect(page.locator('#long-value')).to_have_text('13.405')


def test_time_zone_and_locale(page: Page):
    page.goto('https://the-internet.herokuapp.com/locale')

    expect(page.locator('#browser-timezone')).to_have_text('Asia/Tokyo')
    expect(page.locator('#browser-language')).to_have_text('de-DE')
    expect(page.locator('#formatted-date')).to_have_text('Mittwoch, 15. April 2026 um 21:00')
    expect(page.locator('#formatted-number')).to_have_text('1.234.567,891')
    expect(page.locator('#greeting')).to_have_text('Hallo!')
