const assert = require('assert');
const {browser} = require('vibium');
const LoggingPage = require('../loggingPage');

describe('Wrapper', function () {
    let bro;
    let page;

    beforeEach(async function () {
        bro = await browser.start();
        page = new LoggingPage(await bro.page());
    });

    afterEach(async function () {
        await bro.stop();
    });

    it('logs every action', async function () {
        await page.go('https://the-internet.herokuapp.com');
        await page.click('a[href="/checkboxes"]');

        assert.deepStrictEqual(page.messages, [
            'Navigated to https://the-internet.herokuapp.com',
            'Clicking on Checkboxes',
            'URL changed to https://the-internet.herokuapp.com/checkboxes',
        ]);
    });
});
