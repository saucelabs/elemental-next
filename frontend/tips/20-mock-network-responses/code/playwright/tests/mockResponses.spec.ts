import {test, expect} from '@playwright/test';

test('shows the mocked answer', async ({page}) => {
    await page.route('**/slow_api/data?*', async (route) => {
        await route.fulfill({json: {message: 'Hello from the mock'}});
    });

    await page.goto('https://the-internet.herokuapp.com/slow_api');
    await page.locator('#call-api').click();

    await expect(page.locator('#status-text')).toHaveText('Hello from the mock');
    await expect(page.locator('#attempts li')).toHaveText('200: Hello from the mock');
});
