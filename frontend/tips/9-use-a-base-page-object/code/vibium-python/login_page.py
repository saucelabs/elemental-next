from base_page import BasePage

USERNAME_INPUT = '#username'
PASSWORD_INPUT = '#password'
SUBMIT_BUTTON = '#login button'
SUCCESS_MESSAGE = '.flash.success'


class LoginPage(BasePage):
    def load(self):
        self.visit('/login')

    def login_as(self, username, password):
        self.type(USERNAME_INPUT, username)
        self.type(PASSWORD_INPUT, password)
        self.click(SUBMIT_BUTTON)

    def success_message_present(self):
        self.wait_for(SUCCESS_MESSAGE)
        return self.is_displayed(SUCCESS_MESSAGE)
