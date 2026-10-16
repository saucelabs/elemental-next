from selenium.webdriver.support.events import AbstractEventListener


class Wrapper(AbstractEventListener):
    def __init__(self):
        self.messages = []
        self.pre_click_url = None

    def log(self, message):
        print(message)
        self.messages.append(message)

    def after_navigate_to(self, url, driver):
        self.log(f'Navigated to {url}')

    def before_find(self, by, value, driver):
        self.log(f'Finding element {value}')

    def after_find(self, by, value, driver):
        self.log(f'Found element {value}')

    def before_click(self, element, driver):
        self.log(f'Clicking on {element.text}')
        self.pre_click_url = driver.current_url

    def after_click(self, element, driver):
        if self.pre_click_url != driver.current_url:
            self.log(f'URL changed to {driver.current_url}')
