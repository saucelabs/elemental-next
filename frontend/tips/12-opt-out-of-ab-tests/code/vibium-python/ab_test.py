import pytest
from vibium import browser

OPT_OUT_COOKIE = {'name': 'optimizelyOptOut', 'value': 'true', 'domain': 'the-internet.herokuapp.com'}


@pytest.fixture
def page():
    bro = browser.start()
    yield bro.page()
    bro.stop()


def test_opt_out_cookie_on_the_target_page(page):
    page.go('https://the-internet.herokuapp.com/abtest')
    heading_text = page.find('h3').text()
    assert heading_text in ['A/B Test Variation 1', 'A/B Test Control']

    page.context.set_cookies([OPT_OUT_COOKIE])
    page.reload()

    assert page.find('h3').text() == 'No A/B Test'


def test_opt_out_cookie_before_visiting_the_target_page(page):
    page.context.set_cookies([OPT_OUT_COOKIE])
    page.go('https://the-internet.herokuapp.com/abtest')

    assert page.find('h3').text() == 'No A/B Test'


def test_opt_out_parameter_in_the_url(page):
    page.on_dialog('dismiss')
    page.go('https://the-internet.herokuapp.com/abtest?optimizely_opt_out=true')

    assert page.find('h3').text() == 'No A/B Test'
