import pytest
from vibium import browser
from dynamic_loading_page import DynamicLoadingPage


@pytest.fixture
def dynamic_loading():
    bro = browser.start()
    dynamic_loading = DynamicLoadingPage(bro.page())
    dynamic_loading.visit()
    yield dynamic_loading
    bro.stop()


def test_hello_world_after_loading(dynamic_loading):
    dynamic_loading.start()
    dynamic_loading.wait_for_finish()
    assert dynamic_loading.finish_text() == 'Hello World!'
