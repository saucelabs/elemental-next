import queue
import pytest
from vibium import browser


@pytest.fixture
def bro():
    bro = browser.start()
    yield bro
    bro.stop()


def test_multiple_windows(bro):
    page = bro.page()
    page.go('https://the-internet.herokuapp.com/windows')

    popups = queue.Queue()
    bro.on_popup(popups.put)
    page.find('.example a').click()
    new_page = popups.get(timeout=10)
    new_page.wait_for_load()

    assert page.title() == 'The Internet'
    assert new_page.title() == 'New Window'
