const assert = require('assert');
const {browser} = require('vibium');

const MESSAGE = 'Congratulations! You must have the proper credentials.';

describe('Basic Auth', function () {
    let bro;
    let page;

    beforeEach(async function () {
        bro = await browser.start();
        page = await bro.page();
    });

    afterEach(async function () {
        await bro.stop();
    });

    it('logs in with basic auth', async function () {
        await page.go('https://admin:admin@the-internet.herokuapp.com/basic_auth');

        assert.strictEqual(await page.find({css: '.example p'}).text(), MESSAGE);
    });
});
