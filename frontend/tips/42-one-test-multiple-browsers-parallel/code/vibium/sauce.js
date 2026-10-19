const SAUCE_URL = 'https://ondemand.us-west-1.saucelabs.com/wd/hub';
const CREDENTIALS = `${process.env.SAUCE_USERNAME}:${process.env.SAUCE_ACCESS_KEY}`;
const AUTH = `Basic ${Buffer.from(CREDENTIALS).toString('base64')}`;

async function webDriver(method, path, body) {
    const response = await fetch(`${SAUCE_URL}${path}`, {
        method,
        headers: {'Authorization': AUTH, 'Content-Type': 'application/json; charset=utf-8'},
        body: body && JSON.stringify(body),
    });
    return (await response.json()).value;
}

// Vibium speaks WebDriver BiDi. We ask Sauce Labs for a session with a BiDi WebSocket (webSocketUrl: true), and then
// connect Vibium to it.
async function startSession(browserName, name) {
    const value = await webDriver('POST', '/session', {
        capabilities: {
            alwaysMatch: {
                browserName,
                browserVersion: 'latest',
                platformName: 'Windows 11',
                webSocketUrl: true,
                'sauce:options': {name},
            },
        },
    });
    return {sessionId: value.sessionId, webSocketUrl: value.capabilities.webSocketUrl};
}

// Marks the job as passed or failed on Sauce Labs, and ends the session
async function endSession(session, passed) {
    await webDriver('POST', `/session/${session.sessionId}/execute/sync`, {
        script: `sauce:job-result=${passed}`,
        args: [],
    });
    await webDriver('DELETE', `/session/${session.sessionId}`);
}

module.exports = {startSession, endSession};
