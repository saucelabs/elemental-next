from playwright.sync_api import Page, expect


class DynamicLoadingPage:
    def __init__(self, page: Page):
        self.page = page
        self.start_button = page.locator('#start button')
        self.finish_text = page.locator('#finish')

    def visit(self):
        self.page.goto('https://the-internet.herokuapp.com/dynamic_loading/2')
        expect(self.page).to_have_title('The Internet')

    def start(self):
        self.start_button.click()
