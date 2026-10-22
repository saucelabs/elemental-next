import pytest
from vibium import browser


def texts(page, selector):
    return [cell.text() for cell in page.find_all(selector)]


def dues(page, selector):
    return [float(due.replace('$', '')) for due in texts(page, selector)]


@pytest.fixture
def page():
    bro = browser.start()
    page = bro.page()
    page.go('https://the-internet.herokuapp.com/tables')
    yield page
    bro.stop()


def test_number_column_ascending(page):
    page.find('#table1 thead tr th:nth-of-type(4)').click()
    page.find('#table1 thead tr th:nth-of-type(4).headerSortDown')
    due_values = dues(page, '#table1 tbody tr td:nth-of-type(4)')
    assert due_values == sorted(due_values)


def test_number_column_descending(page):
    page.find('#table1 thead tr th:nth-of-type(4)').click()
    page.find('#table1 thead tr th:nth-of-type(4)').click()
    page.find('#table1 thead tr th:nth-of-type(4).headerSortUp')
    due_values = dues(page, '#table1 tbody tr td:nth-of-type(4)')
    assert due_values == sorted(due_values, reverse=True)


def test_text_column_ascending(page):
    page.find('#table1 thead tr th:nth-of-type(3)').click()
    page.find('#table1 thead tr th:nth-of-type(3).headerSortDown')
    emails = texts(page, '#table1 tbody tr td:nth-of-type(3)')
    assert emails == sorted(emails)


def test_number_column_ascending_with_semantic_locators(page):
    page.find('#table2 thead .dues').click()
    page.find('#table2 thead th.headerSortDown:has(.dues)')
    due_values = dues(page, '#table2 tbody .dues')
    assert due_values == sorted(due_values)
