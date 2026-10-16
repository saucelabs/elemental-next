from selenium.common.exceptions import NoSuchElementException
from selenium.webdriver.support.ui import WebDriverWait


class BasePage:
    BASE_URL = 'https://the-internet.herokuapp.com'

    def __init__(self, driver):
        self.driver = driver

    def visit(self, path='/'):
        self.driver.get(self.BASE_URL + path)

    def find(self, locator):
        return self.driver.find_element(*locator)

    def click(self, locator):
        self.find(locator).click()

    def type(self, locator, text):
        self.find(locator).clear()
        self.find(locator).send_keys(text)

    def is_displayed(self, locator):
        try:
            return self.find(locator).is_displayed()
        except NoSuchElementException:
            return False

    def text_of(self, locator):
        return self.find(locator).text

    def title(self):
        return self.driver.title

    def wait_for(self, locator, timeout=10):
        WebDriverWait(self.driver, timeout).until(lambda driver: self.is_displayed(locator))
