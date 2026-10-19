const assert = require('assert');
const {browser} = require('vibium');

describe('JavaScript Alerts', function () {
    let bro;
    let page;

    beforeEach(async function () {
        bro = await browser.start();
        page = await bro.page();
        await page.go('https://the-internet.herokuapp.com/javascript_alerts');
    });

    afterEach(async function () {
        await bro.stop();
    });

    it('accepts the confirmation', async function () {
        page.onDialog((dialog) => dialog.accept());
        await page.find({role: 'button', text: 'Click for JS Confirm'}).click();

        assert.strictEqual(await page.find('#result').text(), 'You clicked: Ok');
    });

    it('dismisses the confirmation', async function () {
        page.onDialog((dialog) => dialog.dismiss());
        await page.find({role: 'button', text: 'Click for JS Confirm'}).click();

        assert.strictEqual(await page.find('#result').text(), 'You clicked: Cancel');
    });
});
