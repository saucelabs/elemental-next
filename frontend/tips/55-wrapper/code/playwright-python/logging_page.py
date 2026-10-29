from playwright.sync_api import Page


# Wraps a page, so that visiting a URL and clicking log what they do
class LoggingPage:
    def __init__(self, page: Page):
        self.page = page
        # The messages logged during the test, so the test can check them
        self.messages = []

    def log(self, message):
        print(message)
        self.messages.append(message)

    def goto(self, url):
        self.page.goto(url)
        self.log(f'Navigated to {url}')

    def click(self, selector):
        element = self.page.locator(selector)
        self.log(f'Clicking on {element.text_content()}')
        pre_click_url = self.page.url
        element.click()
        self.page.wait_for_load_state()
        if self.page.url != pre_click_url:
            self.log(f'URL changed to {self.page.url}')
