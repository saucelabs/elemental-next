import os
from playwright.sync_api import Page


def test_file_download(page: Page, tmp_path):
    page.goto('https://the-internet.herokuapp.com/download')

    with page.expect_download() as download_info:
        page.locator('.example a').first.click()
    download = download_info.value

    file_path = os.path.join(tmp_path, download.suggested_filename)
    download.save_as(file_path)

    assert os.path.getsize(file_path) > 0
