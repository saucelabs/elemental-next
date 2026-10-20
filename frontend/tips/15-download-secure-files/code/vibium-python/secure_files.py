import base64
import http.client
import urllib.parse
import pytest
from vibium import browser

HOST = 'the-internet.herokuapp.com'


@pytest.fixture
def page():
    bro = browser.start()
    yield bro.page()
    bro.stop()


def request(method, path, headers):
    connection = http.client.HTTPSConnection(HOST)
    connection.request(method, path, headers=headers)
    response = connection.getresponse()
    connection.close()
    return response


def test_files_behind_basic_auth(page):
    credentials = base64.b64encode(b'admin:admin').decode()
    page.set_headers({'Authorization': f'Basic {credentials}'})
    page.go(f'https://{HOST}/download_secure')
    link = page.find('.example a').attr('href')

    # The file names can have spaces and other characters that need to be encoded in a URL.
    response = request('HEAD', urllib.parse.quote(f'/{link}'), {'Authorization': f'Basic {credentials}'})
    assert response.status == 200, link


def test_page_behind_form_login(page):
    page.go(f'https://{HOST}/login')
    page.find('#username').fill('tomsmith')
    page.find('#password').fill('SuperSecretPassword!')
    page.find('#login button').click()
    page.find('.flash.success').wait_until('visible')

    cookie = next(c for c in page.context.cookies() if c['name'] == 'rack.session')
    response = request('GET', '/secure', {'Cookie': f"{cookie['name']}={cookie['value']}"})
    assert response.status == 200

    response = request('GET', '/secure', {})
    assert response.status == 302
