const assert = require('assert');
const {browser} = require('vibium');

describe('Disabled Element', function () {
    let bro;
    let page;

    beforeEach(async function () {
        bro = await browser.start();
        page = await bro.page();
    });

    afterEach(async function () {
        await bro.stop();
    });

    it('finds the disabled option', async function () {
        await page.go('https://the-internet.herokuapp.com/dropdown');

        assert.strictEqual(await page.find({role: 'option', text: 'Please select an option'}).isEnabled(), false);
        assert.strictEqual(await page.find({role: 'option', text: 'Option 1'}).isEnabled(), true);
    });
});
