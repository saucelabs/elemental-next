import pytest
from playwright.sync_api import Page, expect
from dynamic_loading_page import DynamicLoadingPage


@pytest.fixture
def dynamic_loading(page: Page):
    dynamic_loading = DynamicLoadingPage(page)
    dynamic_loading.visit()
    return dynamic_loading


def test_hello_world_after_loading(dynamic_loading):
    dynamic_loading.start()
    expect(dynamic_loading.finish_text).to_have_text('Hello World!', timeout=10000)
