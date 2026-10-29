import pytest
from playwright.sync_api import Page, expect


def dues(page: Page):
    cells = page.locator('#table2 tbody .dues').all_text_contents()
    return [float(due.replace('$', '')) for due in cells]


@pytest.fixture(autouse=True)
def visit_tables_page(page: Page):
    page.goto('https://the-internet.herokuapp.com/tables')


def test_in_ascending_order(page: Page):
    page.locator('#table2 thead th:has(.dues)').click()
    expect(page.locator('#table2 thead th:has(.dues)')).to_contain_class('headerSortDown')
    due_values = dues(page)
    assert due_values == sorted(due_values)


def test_in_descending_order(page: Page):
    page.locator('#table2 thead th:has(.dues)').click()
    page.locator('#table2 thead th:has(.dues)').click()
    expect(page.locator('#table2 thead th:has(.dues)')).to_contain_class('headerSortUp')
    due_values = dues(page)
    assert due_values == sorted(due_values, reverse=True)
