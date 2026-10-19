const assert = require('assert');
const {browser} = require('vibium');

const BASE_URL = 'https://the-internet.herokuapp.com';

describe('Download Secure Files', function () {
    let bro;
    let page;

    beforeEach(async function () {
        bro = await browser.start();
        page = await bro.page();
    });

    afterEach(async function () {
        await bro.stop();
    });

    it('checks the files behind Basic Auth', async function () {
        const credentials = Buffer.from('admin:admin').toString('base64');
        await page.setHeaders({Authorization: `Basic ${credentials}`});
        await page.go(`${BASE_URL}/download_secure`);
        const link = new URL(await page.find('.example a').attr('href'), BASE_URL).toString();

        const response = await fetch(link, {
            method: 'HEAD',
            headers: {Authorization: `Basic ${credentials}`},
        });
        assert.strictEqual(response.status, 200, link);
    });

    it('checks a page behind a form login', async function () {
        await page.go(`${BASE_URL}/login`);
        await page.find('#username').fill('tomsmith');
        await page.find('#password').fill('SuperSecretPassword!');
        await page.find('#login button').click();
        await page.find('.flash.success').waitUntil('visible');

        const cookies = await page.context.cookies();
        const cookie = cookies.find((c) => c.name === 'rack.session');
        let response = await fetch(`${BASE_URL}/secure`, {
            headers: {Cookie: `${cookie.name}=${cookie.value}`},
            redirect: 'manual',
        });
        assert.strictEqual(response.status, 200);

        response = await fetch(`${BASE_URL}/secure`, {redirect: 'manual'});
        assert.strictEqual(response.status, 302);
    });
});
