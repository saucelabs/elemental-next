import pytest
from vibium import browser


@pytest.fixture
def page(request):
    bro = browser.start()
    page = bro.page()
    yield page
    report = getattr(request.node, 'report_call', None)
    if report is not None and report.failed:
        with open(f'failshot_{request.node.name}.png', 'wb') as file:
            file.write(page.screenshot())
    bro.stop()


def test_fails_on_purpose(page):
    page.go('https://the-internet.herokuapp.com')
    assert page.find('h1').text() == 'blah blah blah'
