import json
from datetime import datetime, timezone

import pytest
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.support.ui import WebDriverWait

BASE_URL = 'https://the-internet.herokuapp.com'
HAR_FILE = 'journey.har'


@pytest.fixture
def driver():
    options = webdriver.ChromeOptions()
    # Turns on WebDriver BiDi, which sends every request of the browser to the test
    options.enable_bidi = True
    driver = webdriver.Chrome(options=options)
    yield driver
    driver.quit()


def test_record_user_journey(driver):
    entries = []

    def record(event):
        request = event['request']
        # Keeps only the requests to the site under test, not the ones to third parties
        if request['url'].startswith(BASE_URL):
            started = datetime.fromtimestamp(event['timestamp'] / 1000, timezone.utc)
            entries.append({
                'startedDateTime': started.isoformat(),
                'request': {'method': request['method'], 'url': request['url']},
            })

    driver.network.add_event_handler('before_request_sent', record)

    driver.get(BASE_URL)
    driver.find_element(By.LINK_TEXT, 'Dynamic Loading').click()
    driver.find_element(By.PARTIAL_LINK_TEXT, 'Example 2').click()
    driver.find_element(By.CSS_SELECTOR, '#start button').click()
    finish = WebDriverWait(driver, 10).until(EC.visibility_of_element_located((By.ID, 'finish')))
    assert finish.text == 'Hello World!'

    har = {'log': {'version': '1.2', 'creator': {'name': 'Elemental Selenium', 'version': '1.0'}, 'entries': entries}}
    with open(HAR_FILE, 'w') as file:
        json.dump(har, file, indent=2)

    urls = [entry['request']['url'] for entry in entries]
    for page in ['/', '/dynamic_loading', '/dynamic_loading/2']:
        assert BASE_URL + page in urls
