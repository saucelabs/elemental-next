from base_page import BasePage


class DynamicLoadingPage(BasePage):
    def __init__(self, page):
        super().__init__(page)
        self.start_button = page.locator('#start button')
        self.finish_text = page.locator('#finish')

    def load(self):
        self.visit('/dynamic_loading/2')

    def start(self):
        self.start_button.click()
