from selenium.webdriver.common.by import By
from base_page import BasePage


class DynamicLoadingPage(BasePage):
    START_BUTTON = (By.CSS_SELECTOR, '#start button')
    FINISH_TEXT = (By.ID, 'finish')

    def __init__(self, driver):
        super().__init__(driver)
        self.visit('/dynamic_loading/2')
        assert self.title() == 'The Internet'

    def start(self):
        self.click(self.START_BUTTON)

    def finish_text(self):
        self.wait_for(self.FINISH_TEXT)
        return self.text_of(self.FINISH_TEXT)
