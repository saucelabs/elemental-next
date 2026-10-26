import {test, expect} from '@playwright/test';

test('fails on purpose', async ({page}) => {
    await page.goto('https://the-internet.herokuapp.com');

    await expect(page.locator('h1')).toHaveText('blah blah blah', {timeout: 2000});
});
