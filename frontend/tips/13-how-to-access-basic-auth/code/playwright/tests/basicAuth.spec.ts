import {test, expect} from '@playwright/test';

const MESSAGE = 'Congratulations! You must have the proper credentials.';

test.use({httpCredentials: {username: 'admin', password: 'admin'}});

test('logs in with basic auth', async ({page}) => {
    await page.goto('https://the-internet.herokuapp.com/basic_auth');

    await expect(page.locator('.example p')).toHaveText(MESSAGE);
});
