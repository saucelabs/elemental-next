import {expect, test} from '@mobilewright/test';
import type {Device, Screen} from 'mobilewright';

const BASE_URL = 'https://the-internet.herokuapp.com';

async function openPage(device: Device, screen: Screen, url: string) {
    const page = await screen.getByWebView().first().page().catch(async () => {
        await device.openUrl(url);
        return screen.getByWebView().first().page();
    });
    await page.goto(url);
    return page;
}

test('logs in', async ({device, screen}) => {
    const page = await openPage(device, screen, BASE_URL);
    await page.locator('a[href="/login"]').click();

    await page.locator('#username').fill('tomsmith');
    await page.locator('#password').fill('SuperSecretPassword!');
    await page.locator('button[type="submit"]').click();

    await expect(page.locator('#flash')).toContainText('You logged into a secure area!');
});

test('checks a checkbox', async ({device, screen}) => {
    const page = await openPage(device, screen, `${BASE_URL}/checkboxes`);

    const checkbox = page.locator('#checkboxes input:first-of-type');
    await expect(checkbox).not.toBeChecked();
    await checkbox.click();
    await expect(checkbox).toBeChecked();
});
