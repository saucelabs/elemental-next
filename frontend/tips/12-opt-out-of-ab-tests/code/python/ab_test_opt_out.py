import pytest
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.support.ui import WebDriverWait


@pytest.fixture
def driver():
    driver = webdriver.Firefox()
    yield driver
    driver.quit()


def test_forge_cookie_on_target_page(driver):
    driver.get('https://the-internet.herokuapp.com/abtest')
    heading_text = driver.find_element(By.TAG_NAME, 'h3').text
    assert heading_text in ['A/B Test Variation 1', 'A/B Test Control']
    driver.add_cookie({'name': 'optimizelyOptOut', 'value': 'true'})
    driver.refresh()
    heading_text = driver.find_element(By.TAG_NAME, 'h3').text
    assert heading_text == 'No A/B Test'


def test_forge_cookie_before_visiting_target_page(driver):
    driver.get('https://the-internet.herokuapp.com')
    driver.add_cookie({'name': 'optimizelyOptOut', 'value': 'true'})
    driver.get('https://the-internet.herokuapp.com/abtest')
    heading_text = driver.find_element(By.TAG_NAME, 'h3').text
    assert heading_text == 'No A/B Test'


def test_url_parameter(driver):
    driver.get('https://the-internet.herokuapp.com/abtest?optimizely_opt_out=true')
    WebDriverWait(driver, 10).until(EC.alert_is_present()).dismiss()
    heading = WebDriverWait(driver, 10).until(EC.presence_of_element_located((By.TAG_NAME, 'h3')))
    heading_text = heading.text
    assert heading_text == 'No A/B Test'
