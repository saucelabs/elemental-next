import {test, expect} from '@playwright/test';

test('opens new tab', async ({page, context}) => {
    await page.goto('https://the-internet.herokuapp.com/windows');

    const newPage = await context.newPage();
    await newPage.goto('https://the-internet.herokuapp.com/typos');

    expect(context.pages()).toHaveLength(2);
    await expect(newPage.locator('h3')).toHaveText('Typos');
});
