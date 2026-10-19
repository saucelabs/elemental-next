const assert = require('assert');
const {browser} = require('vibium');

const GRID_URL = process.env.GRID_URL || 'http://localhost:4444';

async function gridIsRunning() {
    return fetch(`${GRID_URL}/status`).then((response) => response.ok, () => false);
}

// Vibium speaks WebDriver BiDi. We ask the Grid for a session with a BiDi WebSocket (webSocketUrl: true), and then
// connect Vibium to it.
async function newGridSession() {
    const response = await fetch(`${GRID_URL}/session`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json; charset=utf-8'},
        body: JSON.stringify({capabilities: {alwaysMatch: {browserName: 'chrome', webSocketUrl: true}}}),
    });
    const {value} = await response.json();
    return {sessionId: value.sessionId, webSocketUrl: value.capabilities.webSocketUrl};
}

describe('Selenium Grid', function () {
    let session;
    let bro;
    let page;

    before(async function () {
        if (!(await gridIsRunning())) {
            console.log(`Start a Selenium Grid on ${GRID_URL} (or set GRID_URL) to run this test`);
            this.skip();
        }
    });

    beforeEach(async function () {
        session = await newGridSession();
        bro = await browser.start(session.webSocketUrl);
        page = await bro.page();
    });

    afterEach(async function () {
        await bro.stop();
        // Ends the session on the Grid
        await fetch(`${GRID_URL}/session/${session.sessionId}`, {method: 'DELETE'});
    });

    it('loads the page', async function () {
        await page.go('https://the-internet.herokuapp.com');
        assert.strictEqual(await page.title(), 'The Internet');
    });
});
