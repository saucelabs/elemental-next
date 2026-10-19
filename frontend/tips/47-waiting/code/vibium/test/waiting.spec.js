const assert = require('assert');
const {browser} = require('vibium');

const BASE_URL = 'https://the-internet.herokuapp.com/dynamic_loading';

describe('Waiting', function () {
    let bro;
    let page;

    beforeEach(async function () {
        bro = await browser.start();
        page = await bro.page();
    });

    afterEach(async function () {
        await bro.stop();
    });

    for (const example of ['1', '2']) {
        it(`waits for the element to be visible in example ${example}`, async function () {
            await page.go(`${BASE_URL}/${example}`);
            await page.find('#start button').click();

            await page.find('#finish').waitUntil('visible', {timeout: 10000});
            assert.strictEqual(await page.find('#finish').text(), 'Hello World!');
        });
    }

    it('gives up when the wait is too short', async function () {
        await page.go(`${BASE_URL}/2`);
        await page.find('#start button').click();

        await assert.rejects(page.find('#finish', {timeout: 2000}), /timeout/);
    });
});
