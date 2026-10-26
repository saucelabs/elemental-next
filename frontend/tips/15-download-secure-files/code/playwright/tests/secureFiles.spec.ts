import {test, expect} from '@playwright/test';

const BASE_URL = 'https://the-internet.herokuapp.com';

test.describe('files behind Basic Auth', () => {
    test.use({httpCredentials: {username: 'admin', password: 'admin'}});

    test('checks the files behind Basic Auth', async ({page}) => {
        await page.goto(`${BASE_URL}/download_secure`);
        const link = await page.locator('.example a').first()
            .evaluate((element) => (element as HTMLAnchorElement).href);

        const response = await page.request.head(link);
        expect(response.status(), link).toBe(200);
    });
});

test('checks a page behind a form login', async ({page, playwright}) => {
    await page.goto(`${BASE_URL}/login`);
    await page.locator('#username').fill('tomsmith');
    await page.locator('#password').fill('SuperSecretPassword!');
    await page.locator('#login button').click();
    await expect(page.locator('.flash.success')).toBeVisible();

    let response = await page.request.get(`${BASE_URL}/secure`, {maxRedirects: 0});
    expect(response.status()).toBe(200);

    const loggedOut = await playwright.request.newContext();
    response = await loggedOut.get(`${BASE_URL}/secure`, {maxRedirects: 0});
    expect(response.status()).toBe(302);
    await loggedOut.dispose();
});
