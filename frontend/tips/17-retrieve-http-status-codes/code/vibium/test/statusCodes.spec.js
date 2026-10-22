const assert = require('assert');
const {browser} = require('vibium');

describe('HTTP Status Codes', function () {
    let bro;
    let page;

    beforeEach(async function () {
        bro = await browser.start();
        page = await bro.page();
    });

    afterEach(async function () {
        await bro.stop();
    });

    for (const expected of [200, 301, 404, 500]) {
        it(`retrieves the ${expected} status code`, async function () {
            const url = `https://the-internet.herokuapp.com/status_codes/${expected}`;

            const response = await page.capture.response(url, () => page.go(url));

            assert.strictEqual(response.status(), expected);
        });
    }
});
