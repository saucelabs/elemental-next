const assert = require('assert');
const {browser} = require('vibium');
const {startSession, endSession} = require('../sauce');

const BROWSERS = ['chrome', 'firefox', 'MicrosoftEdge'];

async function runOn(browserName) {
    const session = await startSession(browserName, `Elemental Selenium - Tip 42 - Vibium - ${browserName}`);
    const bro = await browser.start(session.webSocketUrl);
    let passed = false;
    try {
        const page = await bro.page();
        await page.go('https://the-internet.herokuapp.com');
        assert.strictEqual(await page.title(), 'The Internet');
        passed = true;
    } finally {
        await bro.stop();
        await endSession(session, passed);
    }
}

describe('One test on multiple browsers, in parallel', function () {
    before(function () {
        if (!process.env.SAUCE_USERNAME || !process.env.SAUCE_ACCESS_KEY) {
            console.log('Set SAUCE_USERNAME and SAUCE_ACCESS_KEY to run this test on Sauce Labs');
            this.skip();
        }
    });

    it('loads the page on every browser', async function () {
        await Promise.all(BROWSERS.map((browserName) => runOn(browserName)));
    });
});
