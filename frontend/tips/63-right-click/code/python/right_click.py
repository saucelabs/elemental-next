import pytest
from selenium import webdriver
from selenium.webdriver.common.action_chains import ActionChains
from selenium.webdriver.common.by import By
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.support.ui import WebDriverWait


@pytest.fixture
def driver():
    driver = webdriver.Firefox()
    yield driver
    driver.quit()


def test_right_click(driver):
    driver.get('https://the-internet.herokuapp.com/context_menu')
    menu_area = driver.find_element(By.ID, 'hot-spot')
    ActionChains(driver).context_click(menu_area).perform()

    alert = WebDriverWait(driver, 5).until(EC.alert_is_present())
    assert alert.text == 'You selected a context menu'
    alert.accept()
