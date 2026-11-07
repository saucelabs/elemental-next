import {test, expect} from '@playwright/test';

test('the toast hides itself after one minute', async ({page}) => {
    // Replaces the timers of the page with fake ones that move only when the test says so
    await page.clock.install();

    await page.goto('https://the-internet.herokuapp.com/toasts?duration=60000');
    await page.locator('#success-toast').click();
    await expect(page.locator('.toast-message')).toHaveText('Saved successfully');

    await page.clock.runFor(59000);
    await expect(page.locator('.toast')).toBeVisible();

    await page.clock.runFor(1000);
    await expect(page.locator('.toast')).toHaveCount(0);
});
