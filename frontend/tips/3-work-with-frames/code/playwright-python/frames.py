from playwright.sync_api import Page, expect


def test_nested_frames(page: Page):
    page.goto('https://the-internet.herokuapp.com/nested_frames')

    middle_frame = page.frame_locator('frame[name="frame-top"]').frame_locator('frame[name="frame-middle"]')

    expect(middle_frame.locator('#content')).to_have_text('MIDDLE')


def test_iframe(page: Page):
    page.goto('https://the-internet.herokuapp.com/tinymce')

    editor = page.frame_locator('#mce_0_ifr').locator('#tinymce')
    editor.fill('Hello World!')

    expect(editor).to_have_text('Hello World!')
    expect(page.locator('h3')).to_have_text('An iFrame containing the TinyMCE WYSIWYG Editor')
