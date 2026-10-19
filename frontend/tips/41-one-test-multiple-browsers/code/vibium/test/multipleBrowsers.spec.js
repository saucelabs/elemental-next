const assert = require('assert');
const {browser} = require('vibium');
const {startSession, endSession} = require('../sauce');

const BROWSERS = ['chrome', 'firefox', 'MicrosoftEdge'];

describe('One test on multiple browsers', function () {
    before(function () {
        if (!process.env.SAUCE_USERNAME || !process.env.SAUCE_ACCESS_KEY) {
            console.log('Set SAUCE_USERNAME and SAUCE_ACCESS_KEY to run this test on Sauce Labs');
            this.skip();
        }
    });

    for (const browserName of BROWSERS) {
        describe(browserName, function () {
            let session;
            let bro;
            let page;

            beforeEach(async function () {
                session = await startSession(browserName, `Elemental Selenium - Tip 41 - Vibium - ${browserName}`);
                bro = await browser.start(session.webSocketUrl);
                page = await bro.page();
            });

            afterEach(async function () {
                await bro.stop();
                await endSession(session, this.currentTest.state === 'passed');
            });

            it('loads the page', async function () {
                await page.go('https://the-internet.herokuapp.com');
                assert.strictEqual(await page.title(), 'The Internet');
            });
        });
    }
});
