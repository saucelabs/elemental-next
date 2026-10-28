import {test, expect} from '@playwright/test';

test('work with a new window', async ({page, context}) => {
    await page.goto('https://the-internet.herokuapp.com/windows');

    const newPagePromise = context.waitForEvent('page');
    await page.locator('.example a').click();
    const newPage = await newPagePromise;

    await expect(page).toHaveTitle('The Internet');
    await expect(newPage).toHaveTitle('New Window');
});
