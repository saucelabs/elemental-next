import {test, expect, BrowserContextOptions} from '@playwright/test';

const BASE_URL = 'https://the-internet.herokuapp.com';
let storageState: BrowserContextOptions['storageState'];

test.beforeAll(async ({browser}) => {
    // Logs in through the form once, and keeps the cookies and the local storage of the logged-in user
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto(`${BASE_URL}/login`);
    await page.getByLabel('Username').fill('tomsmith');
    await page.getByLabel('Password').fill('SuperSecretPassword!');
    await page.locator('button[type="submit"]').click();
    await expect(page.locator('#username')).toHaveText('tomsmith');
    storageState = await context.storageState();
    await context.close();
});

test('the secure area shows the user', async ({browser}) => {
    const context = await browser.newContext({storageState});
    const page = await context.newPage();
    await page.goto(`${BASE_URL}/secure`);

    await expect(page.locator('#username')).toHaveText('tomsmith');
    await context.close();
});

test('logs out', async ({browser}) => {
    const context = await browser.newContext({storageState});
    const page = await context.newPage();
    await page.goto(`${BASE_URL}/secure`);
    await page.locator('a[href="/logout"]').click();

    await expect(page.locator('#flash')).toContainText('You logged out of the secure area!');
    await context.close();
});
