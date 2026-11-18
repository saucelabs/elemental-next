def dues(page):
    return [float(due.text().replace('$', '')) for due in page.find_all(css='#table1 tbody tr td:nth-of-type(4)')]


def test_ascending_order(page):
    page.find(css='#table1 thead tr th:nth-of-type(4)').click()
    page.find(css='#table1 thead tr th:nth-of-type(4).headerSortDown')
    due_values = dues(page)
    assert due_values == sorted(due_values)


def test_descending_order(page):
    page.find(css='#table1 thead tr th:nth-of-type(4)').click()
    page.find(css='#table1 thead tr th:nth-of-type(4)').click()
    page.find(css='#table1 thead tr th:nth-of-type(4).headerSortUp')
    due_values = dues(page)
    assert due_values == sorted(due_values, reverse=True)
