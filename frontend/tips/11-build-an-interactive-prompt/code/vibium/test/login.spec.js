const assert = require('assert');
const {browser} = require('vibium');

describe('Login', function () {
    let bro;
    let page;

    beforeEach(async function () {
        bro = await browser.start();
        page = await bro.page();
    });

    afterEach(async function () {
        await bro.stop();
    });

    // Each step is one of the commands that worked in the Vibium CLI session of the tip
    it('logs in', async function () {
        await page.go('https://the-internet.herokuapp.com');
        await page.find({role: 'link', text: 'Form Authentication'}).click();
        await page.find({css: '#username'}).fill('tomsmith');
        await page.find({css: '#password'}).fill('SuperSecretPassword!');
        await page.find({css: 'button[type=submit]'}).click();
        assert((await page.find({css: '#flash'}).text()).startsWith('You logged into a secure area!'));
    });
});
