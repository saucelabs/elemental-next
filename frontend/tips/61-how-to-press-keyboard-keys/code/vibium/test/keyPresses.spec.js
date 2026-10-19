const assert = require('assert');
const {browser} = require('vibium');

describe('Keyboard Keys', function () {
    let bro;
    let page;

    beforeEach(async function () {
        bro = await browser.start();
        page = await bro.page();
        await page.go('https://the-internet.herokuapp.com/key_presses');
    });

    afterEach(async function () {
        await bro.stop();
    });

    it('sends keys to an element', async function () {
        await page.find('#target').press('Space');
        assert.strictEqual(await page.find('#result').text(), 'You entered: SPACE');
    });

    it('sends keys without an element', async function () {
        await page.keyboard.press('Tab');
        assert.strictEqual(await page.find('#result').text(), 'You entered: TAB');
    });
});
