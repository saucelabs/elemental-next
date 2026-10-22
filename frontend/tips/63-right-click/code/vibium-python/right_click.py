import queue
import pytest
from vibium import browser


@pytest.fixture
def page():
    bro = browser.start()
    yield bro.page()
    bro.stop()


def test_opens_the_context_menu(page):
    page.go('https://the-internet.herokuapp.com/context_menu')

    alert_texts = queue.Queue()

    def handle_alert(dialog):
        alert_texts.put(dialog.message())
        dialog.accept()

    page.on_dialog(handle_alert)
    # Vibium has no right click, so we fire the contextmenu event on the element
    page.find('#hot-spot').dispatch_event('contextmenu', {'bubbles': True})

    assert alert_texts.get(timeout=10) == 'You selected a context menu'
