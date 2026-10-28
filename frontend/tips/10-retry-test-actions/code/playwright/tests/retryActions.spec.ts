import {test, expect} from '@playwright/test';

test('eventually displays a successful notification', async ({page}) => {
    await expect(async () => {
        await page.goto('https://the-internet.herokuapp.com/notification_message');
        await expect(page.locator('#flash')).toContainText('Action successful', {timeout: 1000});
    }).toPass({timeout: 30000});
});
