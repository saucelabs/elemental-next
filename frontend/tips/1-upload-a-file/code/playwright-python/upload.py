import os
from playwright.sync_api import Page, expect


def test_file_upload(page: Page):
    filename = 'some-file.txt'
    file_path = os.path.join(os.getcwd(), filename)

    page.goto('https://the-internet.herokuapp.com/upload')
    page.locator('#file-upload').set_input_files(file_path)
    page.locator('#file-submit').click()

    expect(page.locator('#uploaded-files')).to_have_text(filename)
