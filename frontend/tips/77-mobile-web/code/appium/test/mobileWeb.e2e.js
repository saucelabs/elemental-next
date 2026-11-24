import {$, browser, driver, expect} from '@wdio/globals';

describe('The Internet on a mobile browser', () => {
    it('logs in', async () => {
        await browser.url('/');
        await $('a[href="/login"]').click();

        await $('#username').setValue('tomsmith');
        await $('#password').setValue('SuperSecretPassword!');
        // On Android, the on-screen keyboard can cover the login button
        if (driver.isAndroid) {
            await driver.hideKeyboard();
        }
        await $('button[type="submit"]').click();

        await expect($('#flash')).toHaveText(expect.stringContaining('You logged into a secure area!'));
    });

    it('checks a checkbox', async () => {
        await browser.url('/checkboxes');

        const checkbox = $('#checkboxes input:first-of-type');
        await expect(checkbox).not.toBeSelected();
        await checkbox.click();
        await expect(checkbox).toBeSelected();
    });
});
