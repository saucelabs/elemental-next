const assert = require('assert');
const {browser} = require('vibium');

describe('HTML5 Drag and Drop', function () {
    let bro;
    let page;

    beforeEach(async function () {
        bro = await browser.start();
        page = await bro.page();
    });

    afterEach(async function () {
        await bro.stop();
    });

    it('swaps the columns', async function () {
        await page.go('https://the-internet.herokuapp.com/drag_and_drop');

        await page.find('#column-a').dragTo(await page.find('#column-b'));

        assert.strictEqual(await page.find('#column-a').text(), 'B');
        assert.strictEqual(await page.find('#column-b').text(), 'A');
    });
});
