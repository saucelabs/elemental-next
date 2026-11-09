import pytest
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.common.bidi.emulation import GeolocationCoordinates
from selenium.webdriver.support.ui import WebDriverWait


@pytest.fixture
def driver():
    options = webdriver.ChromeOptions()
    # Turns on WebDriver BiDi, which lets the test change what the browser reports
    options.enable_bidi = True
    driver = webdriver.Chrome(options=options)
    yield driver
    driver.quit()


def test_geolocation(driver):
    tab = [driver.current_window_handle]
    driver.permissions.set_permission('geolocation', 'granted', 'https://the-internet.herokuapp.com')
    driver.emulation.set_geolocation_override(
        coordinates=GeolocationCoordinates(latitude=52.52, longitude=13.405), contexts=tab)

    driver.get('https://the-internet.herokuapp.com/geolocation')
    driver.find_element(By.TAG_NAME, 'button').click()
    WebDriverWait(driver, 5).until(lambda d: d.find_elements(By.ID, 'lat-value'))
    assert driver.find_element(By.ID, 'lat-value').text == '52.52'
    assert driver.find_element(By.ID, 'long-value').text == '13.405'


def test_time_zone_and_locale(driver):
    tab = [driver.current_window_handle]
    driver.emulation.set_timezone_override(timezone='Asia/Tokyo', contexts=tab)
    driver.emulation.set_locale_override(locale='de-DE', contexts=tab)

    driver.get('https://the-internet.herokuapp.com/locale')
    assert driver.find_element(By.ID, 'browser-timezone').text == 'Asia/Tokyo'
    assert driver.find_element(By.ID, 'browser-language').text == 'de-DE'
    assert driver.find_element(By.ID, 'formatted-date').text == 'Mittwoch, 15. April 2026 um 21:00'
    assert driver.find_element(By.ID, 'formatted-number').text == '1.234.567,891'
    assert driver.find_element(By.ID, 'greeting').text == 'Hallo!'
