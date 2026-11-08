import base64
import pytest
from selenium import webdriver
from selenium.webdriver.common.print_page_options import PrintOptions


@pytest.fixture
def driver():
    driver = webdriver.Firefox()
    yield driver
    driver.quit()


def test_print_the_page_to_pdf(driver, tmp_path):
    driver.get('https://the-internet.herokuapp.com/tables')

    options = PrintOptions()
    options.orientation = 'landscape'
    pdf = base64.b64decode(driver.print_page(options))

    # Every PDF file starts with %PDF-
    assert pdf.startswith(b'%PDF-')
    path = tmp_path / 'tables.pdf'
    path.write_bytes(pdf)
    print('Saved', path)
