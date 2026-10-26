import {test, expect, type Page} from '@playwright/test';

async function dues(page: Page) {
    return (await page.locator('#table1 tbody tr td:nth-of-type(4)').allTextContents())
        .map((due) => parseFloat(due.replace('$', '')));
}

test.describe('Sort Data Table Without Attributes', () => {
    test.beforeEach(async ({page}) => {
        await page.goto('https://the-internet.herokuapp.com/tables');
    });

    test('in ascending order', async ({page}) => {
        await page.locator('#table1 thead tr th:nth-of-type(4)').click();
        await expect(page.locator('#table1 thead tr th:nth-of-type(4)')).toContainClass('headerSortDown');
        const dueValues = await dues(page);
        expect(dueValues).toEqual([...dueValues].sort((a, b) => a - b));
    });

    test('in descending order', async ({page}) => {
        await page.locator('#table1 thead tr th:nth-of-type(4)').click();
        await page.locator('#table1 thead tr th:nth-of-type(4)').click();
        await expect(page.locator('#table1 thead tr th:nth-of-type(4)')).toContainClass('headerSortUp');
        const dueValues = await dues(page);
        expect(dueValues).toEqual([...dueValues].sort((a, b) => b - a));
    });
});
