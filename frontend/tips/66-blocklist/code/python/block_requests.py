import pytest
from selenium import webdriver
from selenium.webdriver.support.ui import WebDriverWait

SLOW_REQUEST = 'https://the-internet.herokuapp.com/slow_external'


@pytest.fixture
def driver():
    options = webdriver.ChromeOptions()
    # Turns on WebDriver BiDi, which lets the test intercept network requests
    options.enable_bidi = True
    driver = webdriver.Chrome(options=options)
    yield driver
    driver.quit()


def test_slow_request_is_blocked(driver):
    blocked = []

    def block(request):
        blocked.append(request.url)
        request.fail()

    driver.network.add_request_handler([SLOW_REQUEST], block)

    driver.get('https://the-internet.herokuapp.com/slow')
    # jQuery.active counts the requests that are still running. The slow request takes 30 seconds,
    # so it reaches 0 in time only when the request is blocked.
    WebDriverWait(driver, 5).until(lambda d: d.execute_script('return jQuery.active') == 0)
    assert blocked == [SLOW_REQUEST]
