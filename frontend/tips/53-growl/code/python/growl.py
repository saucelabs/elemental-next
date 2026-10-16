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


def test_growl_notification(driver):
    driver.get('https://the-internet.herokuapp.com')
    wait = WebDriverWait(driver, 10)

    # Step 1: check for jQuery on the page, add it if need be
    driver.execute_script("""
        if (!window.jQuery) {
            var jquery = document.createElement('script');
            jquery.type = 'text/javascript';
            jquery.src = 'https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js';
            document.getElementsByTagName('head')[0].appendChild(jquery);
        }""")
    wait.until(lambda d: d.execute_script('return !!window.jQuery'))

    # Step 2: use jQuery to add jquery-growl to the page
    driver.execute_script("$.getScript('https://the-internet.herokuapp.com/js/vendor/jquery.growl.js')")

    # Step 3: use jQuery to add jquery-growl styles to the page
    driver.execute_script(
        "$('head').append('<link rel=\"stylesheet\" "
        "href=\"https://the-internet.herokuapp.com/css/jquery.growl.css\" type=\"text/css\" />');")
    wait.until(lambda d: d.execute_script('return !!$.growl'))

    # Step 4: display a message with jquery-growl
    driver.execute_script("$.growl({ title: 'GET', message: '/' });")

    notification = wait.until(EC.visibility_of_element_located((By.CSS_SELECTOR, '#growls .growl')))
    assert notification.find_element(By.CLASS_NAME, 'growl-title').text == 'GET'
    assert notification.find_element(By.CLASS_NAME, 'growl-message').text == '/'
