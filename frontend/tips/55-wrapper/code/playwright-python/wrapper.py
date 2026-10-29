from playwright.sync_api import Page
from logging_page import LoggingPage


def test_log_every_action(page: Page):
    logging_page = LoggingPage(page)

    logging_page.goto('https://the-internet.herokuapp.com')
    logging_page.click('text=Checkboxes')

    assert logging_page.messages == [
        'Navigated to https://the-internet.herokuapp.com',
        'Clicking on Checkboxes',
        'URL changed to https://the-internet.herokuapp.com/checkboxes',
    ]
