import {test, expect} from '@playwright/test';

const gridUrl = process.env.GRID_URL || 'http://localhost:4444';

test.beforeAll(async () => {
    const gridIsRunning = await fetch(new URL('/status', gridUrl)).then((response) => response.ok, () => false);
    test.skip(!gridIsRunning, 'Start a Selenium Grid on http://localhost:4444 (or set GRID_URL) to run this test');
    // With this variable set, Playwright starts Chrome on the Grid instead of on this machine
    process.env.SELENIUM_REMOTE_URL = gridUrl;
});

test('loads the page', async ({page}) => {
    await page.goto('https://the-internet.herokuapp.com');
    await expect(page).toHaveTitle('The Internet');
});
