import {test, expect} from '@playwright/test';

test('loads the page', async ({page}) => {
    await page.goto('https://the-internet.herokuapp.com');
    await expect(page).toHaveTitle('The Internet');

    const userAgent = await page.evaluate(() => navigator.userAgent);
    console.log(userAgent);
    expect(userAgent).toContain('HeadlessChrome');
});
