URL = 'https://the-internet.herokuapp.com/dynamic_loading/2'
START_BUTTON = '#start button'
FINISH_TEXT = '#finish'


class DynamicLoadingPage:
    def __init__(self, page):
        self.page = page

    def visit(self):
        self.page.go(URL)
        assert self.page.title() == 'The Internet'

    def start(self):
        self.page.find(START_BUTTON).click()

    def wait_for_finish(self, timeout=10000):
        self.page.find(FINISH_TEXT).wait_until('visible', timeout=timeout)

    def finish_text(self):
        return self.page.find(FINISH_TEXT).text()
