import {expect} from '@playwright/test';
import {test} from './sauceLabs';

test.skip(!process.env.SAUCE_USERNAME || !process.env.SAUCE_ACCESS_KEY,
    'Set SAUCE_USERNAME and SAUCE_ACCESS_KEY to run this test on Sauce Labs');

test('loads the page', async ({page}) => {
    await page.goto('https://the-internet.herokuapp.com');
    await expect(page).toHaveTitle('The Internet');
});
