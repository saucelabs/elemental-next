BASE_URL = 'https://the-internet.herokuapp.com'


class BasePage:
    def __init__(self, page):
        self.page = page

    def visit(self, path='/'):
        self.page.go(BASE_URL + path)
        assert self.page.title() == 'The Internet'

    def click(self, selector):
        self.page.find(selector).click()

    def type(self, selector, text):
        self.page.find(selector).fill(text)

    def text_of(self, selector):
        return self.page.find(selector).text()

    def is_displayed(self, selector):
        return self.page.find(selector).is_visible()

    def wait_for(self, selector, timeout=10000):
        self.page.find(selector).wait_until('visible', timeout=timeout)
