import {test, expect} from '@playwright/test';
import fs from 'fs';
import path from 'path';

function userData() {
    const [header, ...rows] = fs.readFileSync(path.join(__dirname, '..', 'user_data.csv'), 'utf8')
        .trim()
        .split(/\r?\n/)
        .map((line) => line.split(','));
    return rows.map((row) => Object.fromEntries(header.map((key, index) => [key, row[index]])));
}

for (const user of userData()) {
    test(`logs in as ${user.account_type}`, async ({page}) => {
        await page.goto('https://the-internet.herokuapp.com/login');
        await page.locator('#username').fill(user.username);
        await page.locator('#password').fill(user.password);
        await page.locator('#login button').click();

        await expect(page.locator('#flash')).toContainText(user.notification_message);
    });
}
