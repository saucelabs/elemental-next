import pytest
from vibium import browser


@pytest.fixture
def page():
    bro = browser.start()
    yield bro.page()
    bro.stop()


def test_displays_the_caption_on_hover(page):
    page.go('https://the-internet.herokuapp.com/hovers')
    an_avatar = page.find('.figure')
    caption = an_avatar.find('.figcaption')
    assert not caption.is_visible()

    an_avatar.hover()
    caption.wait_until('visible')
    assert caption.is_visible()
