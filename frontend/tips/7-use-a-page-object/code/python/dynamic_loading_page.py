from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait


class DynamicLoadingPage:
    URL = 'https://the-internet.herokuapp.com/dynamic_loading/2'
    START_BUTTON = (By.CSS_SELECTOR, '#start button')
    FINISH_TEXT = (By.ID, 'finish')

    def __init__(self, driver):
        self.driver = driver
        self.driver.get(self.URL)
        assert self.driver.title == 'The Internet'

    def start(self):
        self.driver.find_element(*self.START_BUTTON).click()

    def wait_for_finish(self, timeout=10):
        WebDriverWait(self.driver, timeout).until(
            lambda driver: driver.find_element(*self.FINISH_TEXT).is_displayed())

    def finish_text(self):
        return self.driver.find_element(*self.FINISH_TEXT).text
