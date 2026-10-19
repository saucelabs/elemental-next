const assert = require('assert');
const {browser} = require('vibium');

describe('Notification Message', function () {
    // The page shows the successful message only some of the time, so this test is flaky on purpose.
    // If it fails, Mocha runs it again (with its hooks), up to 9 more times.
    this.retries(9);

    let bro;
    let page;

    beforeEach(async function () {
        bro = await browser.start();
        page = await bro.page();
    });

    afterEach(async function () {
        await bro.stop();
    });

    it('is successful', async function () {
        await page.go('https://the-internet.herokuapp.com/notification_message');
        const message = await page.find('#flash').text();
        assert(message.includes('Action successful'), message);
    });
});
