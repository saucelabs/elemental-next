import {test, expect, type Page} from '@playwright/test';

async function dues(page: Page) {
    return (await page.locator('#table2 tbody .dues').allTextContents())
        .map((due) => parseFloat(due.replace('$', '')));
}

test.describe('Sort Data Table With Attributes', () => {
    test.beforeEach(async ({page}) => {
        await page.goto('https://the-internet.herokuapp.com/tables');
    });

    test('in ascending order', async ({page}) => {
        await page.locator('#table2 thead th:has(.dues)').click();
        await expect(page.locator('#table2 thead th:has(.dues)')).toContainClass('headerSortDown');
        const dueValues = await dues(page);
        expect(dueValues).toEqual([...dueValues].sort((a, b) => a - b));
    });

    test('in descending order', async ({page}) => {
        await page.locator('#table2 thead th:has(.dues)').click();
        await page.locator('#table2 thead th:has(.dues)').click();
        await expect(page.locator('#table2 thead th:has(.dues)')).toContainClass('headerSortUp');
        const dueValues = await dues(page);
        expect(dueValues).toEqual([...dueValues].sort((a, b) => b - a));
    });
});
