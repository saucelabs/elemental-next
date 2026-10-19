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

    it('has the right title @smoke', async function () {
        await page.go('https://the-internet.herokuapp.com');
        assert.strictEqual(await page.title(), 'The Internet');
    });

    // This test is not finished yet, so it fails. Since it's tagged as @wip, it doesn't run with `--grep @smoke`.
    it('is a work in progress @wip', async function () {
        await page.go('https://the-internet.herokuapp.com');
        assert.strictEqual(await page.title(), 'Not finished yet');
    });
});
