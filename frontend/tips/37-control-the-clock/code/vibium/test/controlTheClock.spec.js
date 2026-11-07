const assert = require('assert');
const {browser} = require('vibium');

describe('Control the clock', function () {
    let bro;
    let page;

    beforeEach(async function () {
        bro = await browser.start();
        page = await bro.page();
    });

    afterEach(async function () {
        await bro.stop();
    });

    it('the toast hides itself after one minute', async function () {
        // Replaces the timers of the page with fake ones that move only when the test says so
        await page.clock.install();

        await page.go('https://the-internet.herokuapp.com/toasts?duration=60000');
        await page.find('#success-toast').click();
        assert.equal(await page.find('.toast-message').text(), 'Saved successfully');

        const toasts = 'document.querySelectorAll(".toast").length';
        await page.clock.runFor(59000);
        assert.equal(await page.evaluate(toasts), 1);

        await page.clock.runFor(1000);
        assert.equal(await page.evaluate(toasts), 0);
    });
});
