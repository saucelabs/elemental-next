import base64
import http.client
import urllib.parse
import pytest
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.support.ui import WebDriverWait

HOST = 'the-internet.herokuapp.com'


@pytest.fixture
def driver():
    driver = webdriver.Firefox()
    yield driver
    driver.quit()


def request(method, path, headers):
    connection = http.client.HTTPSConnection(HOST)
    connection.request(method, path, headers=headers)
    response = connection.getresponse()
    connection.close()
    return response


def test_files_behind_basic_auth(driver):
    driver.get(f'https://admin:admin@{HOST}/download_secure')
    link = driver.find_element(By.CSS_SELECTOR, '.example a').get_dom_attribute('href')

    credentials = base64.b64encode(b'admin:admin').decode()
    # The file names can have spaces and other characters that need to be encoded in a URL.
    response = request('HEAD', urllib.parse.quote(f'/{link}'), {'Authorization': f'Basic {credentials}'})
    assert response.status == 200, link


def test_page_behind_form_login(driver):
    driver.get(f'https://{HOST}/login')
    driver.find_element(By.ID, 'username').send_keys('tomsmith')
    driver.find_element(By.ID, 'password').send_keys('SuperSecretPassword!')
    driver.find_element(By.CSS_SELECTOR, '#login button').click()
    WebDriverWait(driver, 10).until(EC.visibility_of_element_located((By.CSS_SELECTOR, '.flash.success')))

    cookie = driver.get_cookie('rack.session')
    response = request('GET', '/secure', {'Cookie': f"{cookie['name']}={cookie['value']}"})
    assert response.status == 200

    response = request('GET', '/secure', {})
    assert response.status == 302
