const assert = require('assert');
const {browser} = require('vibium');

describe('Mock responses', function () {
    let bro;
    let page;

    beforeEach(async function () {
        bro = await browser.start();
        page = await bro.page();
    });

    afterEach(async function () {
        await bro.stop();
    });

    it('shows the mocked answer', async function () {
        await page.route('**/slow_api/data?*', async (route) => {
            await route.fulfill({
                contentType: 'application/json',
                body: JSON.stringify({message: 'Hello from the mock'}),
            });
        });

        await page.go('https://the-internet.herokuapp.com/slow_api');
        await page.find('#call-api').click();

        // find() waits for the answer to show up in the list
        const attempt = await page.find('#attempts li').text();
        assert.equal(attempt, '200: Hello from the mock');
        assert.equal(await page.find('#status-text').text(), 'Hello from the mock');
    });
});
