import pytest
from vibium import browser


@pytest.fixture
def page():
    bro = browser.start()
    yield bro.page()
    bro.stop()


def test_print_the_page_to_pdf(page, tmp_path):
    page.go('https://the-internet.herokuapp.com/tables')

    pdf = page.pdf()

    # Every PDF file starts with %PDF-
    assert pdf.startswith(b'%PDF-')
    path = tmp_path / 'tables.pdf'
    path.write_bytes(pdf)
    print('Saved', path)
