import pytest
from selenium import webdriver
from selenium.webdriver.common.by import By


@pytest.fixture
def driver():
    driver = webdriver.Firefox()
    yield driver
    driver.quit()


# The page shows the successful message only some of the time, so this test is flaky on purpose.
# If it fails, pytest-rerunfailures runs it again, up to 9 more times.
@pytest.mark.flaky(reruns=9)
def test_notification_message(driver):
    driver.get('https://the-internet.herokuapp.com/notification_message')
    assert 'Action successful' in driver.find_element(By.ID, 'flash').text
