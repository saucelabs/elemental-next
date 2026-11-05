import pytest
from selenium import webdriver


@pytest.fixture
def driver():
    options = webdriver.ChromeOptions()
    # Runs Chrome without a window
    options.add_argument('--headless')
    driver = webdriver.Chrome(options=options)
    yield driver
    driver.quit()


def test_page_loaded(driver):
    driver.get('https://the-internet.herokuapp.com')
    assert driver.title == 'The Internet'

    user_agent = driver.execute_script('return navigator.userAgent')
    print(user_agent)
    assert 'HeadlessChrome' in user_agent
