import re
import pytest
from vibium import browser


@pytest.fixture
def page():
    bro = browser.start()
    yield bro.page()
    bro.stop()


def test_time_zone(page):
    page.clock.set_timezone('Asia/Tokyo')

    page.go('https://the-internet.herokuapp.com/locale')

    assert page.find('#browser-timezone').text() == 'Asia/Tokyo'
    # 12:00 UTC is 21:00 in Tokyo (9:00 PM with a 12-hour clock, depending on the browser's language)
    assert re.search('21:00|9:00', page.find('#formatted-date').text())
