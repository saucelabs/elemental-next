const assert = require('assert');
const {browser} = require('vibium');

describe('Right Click', function () {
    let bro;
    let page;

    beforeEach(async function () {
        bro = await browser.start();
        page = await bro.page();
    });

    afterEach(async function () {
        await bro.stop();
    });

    it('opens the context menu', async function () {
        await page.go('https://the-internet.herokuapp.com/context_menu');

        const alertText = new Promise((resolve) => {
            page.onDialog(async (dialog) => {
                resolve(dialog.message());
                await dialog.accept();
            });
        });
        // Vibium has no right click, so we fire the contextmenu event on the element
        await page.find('#hot-spot').dispatchEvent('contextmenu', {bubbles: true});

        assert.strictEqual(await alertText, 'You selected a context menu');
    });
});
