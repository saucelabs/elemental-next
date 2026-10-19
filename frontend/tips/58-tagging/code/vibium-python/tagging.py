import pytest
from vibium import browser


@pytest.fixture
def page():
    bro = browser.start()
    yield bro.page()
    bro.stop()


@pytest.mark.smoke
def test_title(page):
    page.go('https://the-internet.herokuapp.com')
    assert page.title() == 'The Internet'


@pytest.mark.wip
def test_work_in_progress(page):
    # This test is not finished yet, so it fails. Since it's tagged as wip, it doesn't run with `-m smoke`.
    page.go('https://the-internet.herokuapp.com')
    assert page.title() == 'Not finished yet'
