const assert = require('assert');
const {browser} = require('vibium');

describe('Emulate time zone', function () {
    let bro;
    let page;

    beforeEach(async function () {
        bro = await browser.start();
        page = await bro.page();
    });

    afterEach(async function () {
        await bro.stop();
    });

    it('time zone', async function () {
        await page.clock.setTimezone('Asia/Tokyo');

        await page.go('https://the-internet.herokuapp.com/locale');

        assert.equal(await page.find('#browser-timezone').text(), 'Asia/Tokyo');
        // 12:00 UTC is 21:00 in Tokyo (9:00 PM with a 12-hour clock, depending on the browser's language)
        assert.match(await page.find('#formatted-date').text(), /21:00|9:00/);
    });
});
