import pytest
from vibium import browser


@pytest.fixture
def page():
    bro = browser.start()
    yield bro.page()
    bro.stop()


def test_nested_frames(page):
    page.go('https://the-internet.herokuapp.com/nested_frames')

    top_frame = page.frame('frame-top')
    middle_frame = top_frame.frame('frame-middle')

    assert middle_frame.find('#content').text() == 'MIDDLE'


def test_iframe(page):
    page.go('https://the-internet.herokuapp.com/tinymce')

    # The editor's iframe has no name and no URL, so we wait for it and take the only frame of the page
    page.find('#mce_0_ifr')
    editor_frame = page.frames()[0]
    editor = editor_frame.find('#tinymce')
    before_text = editor.text()
    editor.clear()
    editor.type('Hello World!')
    assert editor.text() != before_text

    assert page.find('h3').text() == 'An iFrame containing the TinyMCE WYSIWYG Editor'
