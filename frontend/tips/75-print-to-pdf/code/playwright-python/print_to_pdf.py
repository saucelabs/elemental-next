from playwright.sync_api import Page


def test_print_the_page_to_pdf(page: Page, tmp_path):
    page.goto('https://the-internet.herokuapp.com/tables')

    path = tmp_path / 'tables.pdf'
    pdf = page.pdf(path=path, landscape=True)

    # Every PDF file starts with %PDF-
    assert pdf.startswith(b'%PDF-')
    print('Saved', path)
