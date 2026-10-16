from selenium.webdriver.common.by import By
from base_page import BasePage


class LoginPage(BasePage):
    USERNAME_INPUT = (By.ID, 'username')
    PASSWORD_INPUT = (By.ID, 'password')
    SUBMIT_BUTTON = (By.CSS_SELECTOR, '#login button')
    SUCCESS_MESSAGE = (By.CSS_SELECTOR, '.flash.success')

    def __init__(self, driver):
        super().__init__(driver)
        self.visit('/login')
        assert self.title() == 'The Internet'

    def login_as(self, username, password):
        self.type(self.USERNAME_INPUT, username)
        self.type(self.PASSWORD_INPUT, password)
        self.click(self.SUBMIT_BUTTON)

    def success_message_present(self):
        self.wait_for(self.SUCCESS_MESSAGE)
        return self.is_displayed(self.SUCCESS_MESSAGE)
