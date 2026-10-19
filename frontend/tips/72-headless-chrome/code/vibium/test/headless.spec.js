const assert = require('assert');
const {browser} = require('vibium');

describe('Headless Chrome', function () {
    let bro;
    let page;

    beforeEach(async function () {
        bro = await browser.start({headless: true});
        page = await bro.page();
    });

    afterEach(async function () {
        await bro.stop();
    });

    it('loads the page', async function () {
        await page.go('https://the-internet.herokuapp.com');
        assert.strictEqual(await page.title(), 'The Internet');

        const userAgent = await page.evaluate('navigator.userAgent');
        console.log(userAgent);
        assert(userAgent.includes('HeadlessChrome'));
    });
});
