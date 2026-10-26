import {test, expect} from '@playwright/test';

test('has the right title', async ({page}) => {
    await page.goto('https://the-internet.herokuapp.com');
    await expect(page).toHaveTitle('The Internet');
});
