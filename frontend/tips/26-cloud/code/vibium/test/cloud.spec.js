const assert = require('assert');
const {browser} = require('vibium');
const {startSession, endSession} = require('../sauce');

describe('Cloud', function () {
    let session;
    let bro;
    let page;

    before(function () {
        if (!process.env.SAUCE_USERNAME || !process.env.SAUCE_ACCESS_KEY) {
            console.log('Set SAUCE_USERNAME and SAUCE_ACCESS_KEY to run this test on Sauce Labs');
            this.skip();
        }
    });

    beforeEach(async function () {
        session = await startSession('chrome', 'Elemental Selenium - Tip 26 - Vibium');
        bro = await browser.start(session.webSocketUrl);
        page = await bro.page();
    });

    afterEach(async function () {
        await bro.stop();
        await endSession(session, this.currentTest.state === 'passed');
    });

    it('loads the page', async function () {
        await page.go('https://the-internet.herokuapp.com');
        assert((await page.title()).includes('The Internet'));
    });
});
