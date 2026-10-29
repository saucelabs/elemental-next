from playwright.sync_api import Page


def test_open_context_menu(page: Page):
    page.goto('https://the-internet.herokuapp.com/context_menu')

    messages = []

    def handle_dialog(dialog):
        messages.append(dialog.message)
        dialog.accept()

    page.once('dialog', handle_dialog)
    page.locator('#hot-spot').click(button='right')

    assert messages == ['You selected a context menu']
