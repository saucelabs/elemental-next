import {browser, $, expect} from '@wdio/globals';
import fs from 'fs';
import path from 'path';

function userData() {
    const [header, ...rows] = fs.readFileSync(path.join(process.cwd(), 'user_data.csv'), 'utf8')
        .trim()
        .split(/\r?\n/)
        .map((line) => line.split(','));
    return rows.map((row) => Object.fromEntries(header.map((key, index) => [key, row[index]])));
}

describe('Data-driven login', () => {
    for (const user of userData()) {
        it(`logs in as ${user.account_type}`, async () => {
            await browser.url('https://the-internet.herokuapp.com/login');
            await $('#username').setValue(user.username);
            await $('#password').setValue(user.password);
            await $('#login button').click();

            await expect($('#flash')).toHaveText(expect.stringContaining(user.notification_message));
        });
    }
});
