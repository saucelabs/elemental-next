import os
import pytest
from vibium import browser


@pytest.fixture
def page():
    bro = browser.start()
    yield bro.page()
    bro.stop()


def test_file_upload(page):
    filename = 'some-file.txt'
    file_path = os.path.join(os.getcwd(), filename)

    page.go('https://the-internet.herokuapp.com/upload')
    page.find('#file-upload').set_files([file_path])
    page.find('#file-submit').click()

    uploaded_file = page.find('#uploaded-files').text()
    assert uploaded_file == filename
