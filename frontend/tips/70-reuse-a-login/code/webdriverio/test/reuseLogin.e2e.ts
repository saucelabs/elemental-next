import {browser, $, expect} from '@wdio/globals';

const BASE_URL = 'https://the-internet.herokuapp.com';

describe('Reuse a login', () => {
    let sessionCookie: WebDriver.Cookie;

    before(async () => {
        // Logs in through the form once, and keeps the session cookie of the logged-in user
        await browser.url(`${BASE_URL}/login`);
        await $('#username').setValue('tomsmith');
        await $('#password').setValue('SuperSecretPassword!');
        await $('button[type="submit"]').click();
        await expect($('#username')).toHaveText('tomsmith');
        [sessionCookie] = await browser.getCookies({name: 'rack.session'});
    });

    beforeEach(async () => {
        // Starts a fresh browser. A cookie can only be added for the site of the current page
        await browser.reloadSession();
        await browser.url(BASE_URL);
        await browser.setCookies({name: sessionCookie.name, value: sessionCookie.value});
    });

    it('the secure area shows the user', async () => {
        await browser.url(`${BASE_URL}/secure`);

        await expect($('#username')).toHaveText('tomsmith');
    });

    it('logs out', async () => {
        await browser.url(`${BASE_URL}/secure`);
        await $('a[href="/logout"]').click();

        await expect($('#flash')).toHaveText(expect.stringContaining('You logged out of the secure area!'));
    });
});
