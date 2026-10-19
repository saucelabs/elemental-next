const assert = require('assert');
const {browser} = require('vibium');

describe('Multiple Windows', function () {
    let bro;
    let page;

    beforeEach(async function () {
        bro = await browser.start();
        page = await bro.page();
    });

    afterEach(async function () {
        await bro.stop();
    });

    it('work with a new window', async function () {
        await page.go('https://the-internet.herokuapp.com/windows');

        const newPagePromise = new Promise((resolve) => bro.onPopup(resolve));
        await page.find('.example a').click();
        const newPage = await newPagePromise;
        await newPage.waitForLoad();

        assert.equal(await page.title(), 'The Internet');
        assert.equal(await newPage.title(), 'New Window');
    });
});
