import json
import pytest
from vibium import browser


@pytest.fixture
def page():
    bro = browser.start()
    yield bro.page()
    bro.stop()


def test_page_shows_the_mocked_answer(page):
    def mock(route):
        route.fulfill(content_type='application/json', body=json.dumps({'message': 'Hello from the mock'}))

    page.route('**/slow_api/data?*', mock)

    page.go('https://the-internet.herokuapp.com/slow_api')
    page.find('#call-api').click()

    # find() waits for the answer to show up in the list
    assert page.find('#attempts li').text() == '200: Hello from the mock'
    assert page.find('#status-text').text() == 'Hello from the mock'
