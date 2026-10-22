# Wraps a Vibium page so that going to a URL and clicking log what they do
class LoggingPage:
    def __init__(self, page):
        self.page = page
        # The messages logged during the test, so the test can check them
        self.messages = []

    def log(self, message):
        print(message)
        self.messages.append(message)

    def go(self, url):
        self.page.go(url)
        self.log(f'Navigated to {url}')

    def click(self, selector):
        element = self.page.find(selector)
        self.log(f'Clicking on {element.text()}')
        pre_click_url = self.page.url()
        element.click()
        self.page.wait_for_load()
        current_url = self.page.url()
        if current_url != pre_click_url:
            self.log(f'URL changed to {current_url}')
