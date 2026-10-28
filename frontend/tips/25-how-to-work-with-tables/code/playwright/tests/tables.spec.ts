import {test, expect, type Locator} from '@playwright/test';

async function dues(cells: Locator) {
    return (await cells.allTextContents()).map((due) => parseFloat(due.replace('$', '')));
}

test.beforeEach(async ({page}) => {
    await page.goto('https://the-internet.herokuapp.com/tables');
});

test('sorts a number column in ascending order', async ({page}) => {
    await page.locator('#table1 thead tr th:nth-of-type(4)').click();
    await expect(page.locator('#table1 thead tr th:nth-of-type(4)')).toContainClass('headerSortDown');
    const dueValues = await dues(page.locator('#table1 tbody tr td:nth-of-type(4)'));
    expect(dueValues).toEqual([...dueValues].sort((a, b) => a - b));
});

test('sorts a number column in descending order', async ({page}) => {
    await page.locator('#table1 thead tr th:nth-of-type(4)').click();
    await page.locator('#table1 thead tr th:nth-of-type(4)').click();
    await expect(page.locator('#table1 thead tr th:nth-of-type(4)')).toContainClass('headerSortUp');
    const dueValues = await dues(page.locator('#table1 tbody tr td:nth-of-type(4)'));
    expect(dueValues).toEqual([...dueValues].sort((a, b) => b - a));
});

test('sorts a text column in ascending order', async ({page}) => {
    await page.locator('#table1 thead tr th:nth-of-type(3)').click();
    await expect(page.locator('#table1 thead tr th:nth-of-type(3)')).toContainClass('headerSortDown');
    const emails = await page.locator('#table1 tbody tr td:nth-of-type(3)').allTextContents();
    expect(emails).toEqual([...emails].sort());
});

test('sorts a number column in ascending order with semantic locators', async ({page}) => {
    await page.locator('#table2 thead th:has(.dues)').click();
    await expect(page.locator('#table2 thead th:has(.dues)')).toContainClass('headerSortDown');
    const dueValues = await dues(page.locator('#table2 tbody .dues'));
    expect(dueValues).toEqual([...dueValues].sort((a, b) => a - b));
});
