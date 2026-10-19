from base_page import BasePage

START_BUTTON = '#start button'
FINISH_TEXT = '#finish'


class DynamicLoadingPage(BasePage):
    def load(self):
        self.visit('/dynamic_loading/2')

    def start(self):
        self.click(START_BUTTON)

    def finish_text(self):
        self.wait_for(FINISH_TEXT)
        return self.text_of(FINISH_TEXT)
