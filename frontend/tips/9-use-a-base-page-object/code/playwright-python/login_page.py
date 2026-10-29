from base_page import BasePage


class LoginPage(BasePage):
    def __init__(self, page):
        super().__init__(page)
        self.username_input = page.locator('#username')
        self.password_input = page.locator('#password')
        self.submit_button = page.locator('#login button')
        self.success_message = page.locator('.flash.success')

    def load(self):
        self.visit('/login')

    def login_as(self, username, password):
        self.username_input.fill(username)
        self.password_input.fill(password)
        self.submit_button.click()
