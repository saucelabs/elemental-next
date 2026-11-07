import pytest
from vibium import browser

TOASTS = 'document.querySelectorAll(".toast").length'


@pytest.fixture
def page():
    bro = browser.start()
    yield bro.page()
    bro.stop()


def test_toast_hides_itself_after_one_minute(page):
    # Replaces the timers of the page with fake ones that move only when the test says so
    page.clock.install()

    page.go('https://the-internet.herokuapp.com/toasts?duration=60000')
    page.find('#success-toast').click()
    assert page.find('.toast-message').text() == 'Saved successfully'

    page.clock.run_for(59000)
    assert page.evaluate(TOASTS) == 1

    page.clock.run_for(1000)
    assert page.evaluate(TOASTS) == 0
