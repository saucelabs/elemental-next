import pytest
from playwright.sync_api import Locator, Page, expect


def dues(cells: Locator):
    return [float(due.replace('$', '')) for due in cells.all_text_contents()]


@pytest.fixture(autouse=True)
def visit_tables_page(page: Page):
    page.goto('https://the-internet.herokuapp.com/tables')


def test_sort_number_column_in_ascending_order(page: Page):
    page.locator('#table1 thead tr th:nth-of-type(4)').click()
    expect(page.locator('#table1 thead tr th:nth-of-type(4)')).to_contain_class('headerSortDown')
    due_values = dues(page.locator('#table1 tbody tr td:nth-of-type(4)'))
    assert due_values == sorted(due_values)


def test_sort_number_column_in_descending_order(page: Page):
    page.locator('#table1 thead tr th:nth-of-type(4)').click()
    page.locator('#table1 thead tr th:nth-of-type(4)').click()
    expect(page.locator('#table1 thead tr th:nth-of-type(4)')).to_contain_class('headerSortUp')
    due_values = dues(page.locator('#table1 tbody tr td:nth-of-type(4)'))
    assert due_values == sorted(due_values, reverse=True)


def test_sort_text_column_in_ascending_order(page: Page):
    page.locator('#table1 thead tr th:nth-of-type(3)').click()
    expect(page.locator('#table1 thead tr th:nth-of-type(3)')).to_contain_class('headerSortDown')
    emails = page.locator('#table1 tbody tr td:nth-of-type(3)').all_text_contents()
    assert emails == sorted(emails)


def test_sort_number_column_in_ascending_order_with_semantic_locators(page: Page):
    page.locator('#table2 thead th:has(.dues)').click()
    expect(page.locator('#table2 thead th:has(.dues)')).to_contain_class('headerSortDown')
    due_values = dues(page.locator('#table2 tbody .dues'))
    assert due_values == sorted(due_values)
