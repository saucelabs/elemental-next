import {test, expect} from '@playwright/test';

// The page shows the successful message only some of the time, so this test is flaky on purpose.
// If it fails, it runs again (see `retries` in playwright.config.ts).
test('the notification message is successful', async ({page}) => {
    await page.goto('https://the-internet.herokuapp.com/notification_message');

    const message = await page.locator('#flash').textContent();
    expect(message).toContain('Action successful');
});
