import {browser, $, $$, expect} from '@wdio/globals';
import assert from 'assert';

const BASE_URL = 'https://the-internet.herokuapp.com';

describe('Download Secure Files', () => {
    it('checks the files behind Basic Auth', async () => {
        await browser.url(`${BASE_URL}/download_secure`, {auth: {user: 'admin', pass: 'admin'}});
        const links = await $$('.example a').map((element) => element.getProperty('href') as Promise<string>);
        assert(links.length > 0);

        const credentials = Buffer.from('admin:admin').toString('base64');
        const responses = await Promise.all(links.map((link) => fetch(link, {
            method: 'HEAD',
            headers: {Authorization: `Basic ${credentials}`},
        })));
        responses.forEach((response, index) => assert.strictEqual(response.status, 200, links[index]));
    });

    it('checks a page behind a form login', async () => {
        await browser.url(`${BASE_URL}/login`);
        await $('#username').setValue('tomsmith');
        await $('#password').setValue('SuperSecretPassword!');
        await $('#login button').click();
        await expect($('.flash.success')).toBeDisplayed();

        const [cookie] = await browser.getCookies({name: 'rack.session'});
        let response = await fetch(`${BASE_URL}/secure`, {
            headers: {Cookie: `${cookie.name}=${cookie.value}`},
            redirect: 'manual',
        });
        assert.strictEqual(response.status, 200);

        response = await fetch(`${BASE_URL}/secure`, {redirect: 'manual'});
        assert.strictEqual(response.status, 302);
    });
});
