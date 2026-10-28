import {test, expect} from '@playwright/test';

test.beforeEach(async ({page}) => {
    await page.goto('https://the-internet.herokuapp.com/login');
    await page.locator('#username').fill('tomsmith');
    await page.locator('#password').fill('SuperSecretPassword!');
    await page.locator('#login button').click();
    await expect(page.locator('.flash.success')).toBeVisible();
});

test('throws an error when acting on a missing element', async ({page}) => {
    await expect(page.locator('#login').click({timeout: 2000})).rejects.toThrow(/Timeout 2000ms exceeded/);
});

test('does not display the login form', async ({page}) => {
    expect(await page.locator('#login').isVisible()).toBe(false);
});
