const assert = require('assert');
const {browser} = require('vibium');

describe('The Internet', function () {
    let bro;
    let page;

    beforeEach(async function () {
        bro = await browser.start();
        page = await bro.page();
    });

    afterEach(async function () {
        await bro.stop();
    });

    it('has the right title', async function () {
        await page.go('https://the-internet.herokuapp.com');
        assert.strictEqual(await page.title(), 'The Internet');
    });
});
