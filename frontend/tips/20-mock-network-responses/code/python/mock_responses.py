import json
import pytest
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.support.ui import WebDriverWait

# Pauses the calls to /slow_api/data, with any query string
API = {'type': 'pattern', 'hostname': 'the-internet.herokuapp.com', 'pathname': '/slow_api/data'}


@pytest.fixture
def driver():
    options = webdriver.ChromeOptions()
    # Turns on WebDriver BiDi, which lets the test intercept network requests
    options.enable_bidi = True
    driver = webdriver.Chrome(options=options)
    yield driver
    driver.quit()


def test_page_shows_the_mocked_answer(driver):
    def mock(request):
        request.provide_response(
            status=200,
            headers={'Content-Type': 'application/json'},
            body=json.dumps({'message': 'Hello from the mock'}))

    driver.network.add_request_handler([API], mock)

    driver.get('https://the-internet.herokuapp.com/slow_api')
    driver.find_element(By.ID, 'call-api').click()
    status = (By.ID, 'status-text')
    WebDriverWait(driver, 5).until(EC.text_to_be_present_in_element(status, 'Hello from the mock'))
    assert driver.find_element(By.CSS_SELECTOR, '#attempts li').text == '200: Hello from the mock'
