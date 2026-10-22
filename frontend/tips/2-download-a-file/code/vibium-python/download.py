import os
import pytest
from vibium import browser


@pytest.fixture
def page():
    bro = browser.start()
    yield bro.page()
    bro.stop()


def test_file_download(page, tmp_path):
    page.go('https://the-internet.herokuapp.com/download')

    with page.capture.download() as captured:
        page.find('.example a').click()
    download = captured.value

    file_path = os.path.join(tmp_path, download.suggested_filename())
    download.save_as(file_path)

    assert os.path.getsize(file_path) > 0
