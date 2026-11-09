import os
import pytest
from saucelabs_visual.client import SauceLabsVisual
from selenium import webdriver

SAUCE_URL = 'https://ondemand.us-west-1.saucelabs.com/wd/hub'


@pytest.fixture(scope='module')
def visual():
    if not os.environ.get('SAUCE_USERNAME') or not os.environ.get('SAUCE_ACCESS_KEY'):
        pytest.skip('Set SAUCE_USERNAME and SAUCE_ACCESS_KEY to run this test on Sauce Labs')

    # A Visual build groups the snapshots of a test run
    visual = SauceLabsVisual()
    visual.create_build(name='Elemental Selenium - Tip 74 - Python')
    return visual


@pytest.fixture
def driver(visual):
    options = webdriver.ChromeOptions()
    options.browser_version = 'latest'
    options.platform_name = 'Windows 11'
    options.set_capability('sauce:options', {
        'username': os.environ['SAUCE_USERNAME'],
        'accessKey': os.environ['SAUCE_ACCESS_KEY'],
        'name': 'Elemental Selenium - Tip 74 - Python',
    })
    driver = webdriver.Remote(command_executor=SAUCE_URL, options=options)
    yield driver
    driver.quit()


def test_newsletter_card(driver, visual):
    driver.get('https://the-internet.herokuapp.com/visual_diff')

    # Takes a screenshot of the card only, and compares it with its baseline in Sauce Labs
    visual.create_snapshot_from_webdriver(name='Newsletter card', driver=driver, clip_selector='#card')

    # Sauce Labs compares the snapshots when the build finishes. Changes show up there for review
    visual.finish_build()
    build = visual.get_build_status()['result']
    print('Review the changes at', build['url'])
    assert build['erroredCount'] == 0
