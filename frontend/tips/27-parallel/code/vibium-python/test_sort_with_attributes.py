def dues(page):
    return [float(due.text().replace('$', '')) for due in page.find_all('#table2 tbody .dues')]


def test_ascending_order(page):
    page.find('#table2 thead .dues').click()
    page.find('#table2 thead th.headerSortDown:has(.dues)')
    due_values = dues(page)
    assert due_values == sorted(due_values)


def test_descending_order(page):
    page.find('#table2 thead .dues').click()
    page.find('#table2 thead .dues').click()
    page.find('#table2 thead th.headerSortUp:has(.dues)')
    due_values = dues(page)
    assert due_values == sorted(due_values, reverse=True)
