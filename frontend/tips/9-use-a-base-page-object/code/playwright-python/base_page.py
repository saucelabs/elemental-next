from playwright.sync_api import Page, expect

BASE_URL = 'https://the-internet.herokuapp.com'


class BasePage:
    def __init__(self, page: Page):
        self.page = page

    def visit(self, path='/'):
        self.page.goto(BASE_URL + path)
        expect(self.page).to_have_title('The Internet')
