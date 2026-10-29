import pytest
from playwright.sync_api import Page, expect


def dues(page: Page):
    cells = page.locator('#table1 tbody tr td:nth-of-type(4)').all_text_contents()
    return [float(due.replace('$', '')) for due in cells]


@pytest.fixture(autouse=True)
def visit_tables_page(page: Page):
    page.goto('https://the-internet.herokuapp.com/tables')


def test_in_ascending_order(page: Page):
    page.locator('#table1 thead tr th:nth-of-type(4)').click()
    expect(page.locator('#table1 thead tr th:nth-of-type(4)')).to_contain_class('headerSortDown')
    due_values = dues(page)
    assert due_values == sorted(due_values)


def test_in_descending_order(page: Page):
    page.locator('#table1 thead tr th:nth-of-type(4)').click()
    page.locator('#table1 thead tr th:nth-of-type(4)').click()
    expect(page.locator('#table1 thead tr th:nth-of-type(4)')).to_contain_class('headerSortUp')
    due_values = dues(page)
    assert due_values == sorted(due_values, reverse=True)
