const assert = require('assert');
const {browser} = require('vibium');

const BASE_URL = 'https://the-internet.herokuapp.com';

describe('Reuse a login', function () {
    let sessionCookie;
    let bro;
    let page;

    before(async function () {
        // Logs in through the form once, and keeps the session cookie of the logged-in user
        const loginBrowser = await browser.start();
        try {
            const loginPage = await loginBrowser.page();
            await loginPage.go(`${BASE_URL}/login`);
            await loginPage.find({css: '#username'}).fill('tomsmith');
            await loginPage.find({css: '#password'}).fill('SuperSecretPassword!');
            await loginPage.find({css: 'button[type="submit"]'}).click();
            await loginPage.find({css: 'a[href="/logout"]'});
            const cookies = await loginPage.context.cookies();
            sessionCookie = cookies.find((cookie) => cookie.name === 'rack.session');
        } finally {
            await loginBrowser.stop();
        }
    });

    beforeEach(async function () {
        bro = await browser.start();
        page = await bro.page();
        await page.context.setCookies([{
            name: sessionCookie.name, value: sessionCookie.value, url: BASE_URL, sameSite: 'lax'}]);
    });

    afterEach(async function () {
        await bro.stop();
    });

    it('the secure area shows the user', async function () {
        await page.go(`${BASE_URL}/secure`);

        assert.equal(await page.find({css: '#username'}).text(), 'tomsmith');
    });

    it('logs out', async function () {
        await page.go(`${BASE_URL}/secure`);
        await page.find({css: 'a[href="/logout"]'}).click();

        assert.match(await page.find({css: '#flash'}).text(), /You logged out of the secure area!/);
    });
});
