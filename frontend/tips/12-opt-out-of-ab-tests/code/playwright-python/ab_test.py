import re
from playwright.sync_api import BrowserContext, Page, expect

OPT_OUT_COOKIE = {'name': 'optimizelyOptOut', 'value': 'true', 'url': 'https://the-internet.herokuapp.com'}


def test_forge_cookie_on_target_page(page: Page, context: BrowserContext):
    page.goto('https://the-internet.herokuapp.com/abtest')
    expect(page.locator('h3')).to_have_text(re.compile(r'A/B Test (Variation 1|Control)'))

    context.add_cookies([OPT_OUT_COOKIE])
    page.reload()

    expect(page.locator('h3')).to_have_text('No A/B Test')


def test_forge_cookie_before_visiting_target_page(page: Page, context: BrowserContext):
    context.add_cookies([OPT_OUT_COOKIE])
    page.goto('https://the-internet.herokuapp.com/abtest')

    expect(page.locator('h3')).to_have_text('No A/B Test')


def test_append_opt_out_parameter_to_url(page: Page):
    page.on('dialog', lambda dialog: dialog.dismiss())
    page.goto('https://the-internet.herokuapp.com/abtest?optimizely_opt_out=true')

    expect(page.locator('h3')).to_have_text('No A/B Test')
