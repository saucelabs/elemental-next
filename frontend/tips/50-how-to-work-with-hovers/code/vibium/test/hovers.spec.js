const assert = require('assert');
const {browser} = require('vibium');

describe('Hovers', function () {
    let bro;
    let page;

    beforeEach(async function () {
        bro = await browser.start();
        page = await bro.page();
    });

    afterEach(async function () {
        await bro.stop();
    });

    it('displays the caption on hover', async function () {
        await page.go('https://the-internet.herokuapp.com/hovers');
        const anAvatar = await page.find('.figure');
        const caption = await anAvatar.find('.figcaption');
        assert.strictEqual(await caption.isVisible(), false);

        await anAvatar.hover();
        await caption.waitUntil('visible');
        assert.strictEqual(await caption.isVisible(), true);
    });
});
