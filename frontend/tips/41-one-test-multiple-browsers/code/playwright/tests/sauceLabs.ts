import {test as base, chromium, firefox, webkit, request} from '@playwright/test';

const SAUCE_URL = 'https://ondemand.us-west-1.saucelabs.com';
const SAUCE_API_URL = 'https://api.us-west-1.saucelabs.com';
const USERNAME = process.env.SAUCE_USERNAME || '';
const ACCESS_KEY = process.env.SAUCE_ACCESS_KEY || '';
// Sauce Labs needs the major and minor version of Playwright, e.g. "1.61"
const PLAYWRIGHT_VERSION = require('@playwright/test/package.json').version.split('.').slice(0, 2).join('.');
// The Playwright browser of each project, and its name on Sauce Labs
const BROWSERS = {
    chromium: {type: chromium, sauceName: 'chrome'},
    firefox: {type: firefox, sauceName: 'firefox'},
    webkit: {type: webkit, sauceName: 'webkit'},
};

// Gives each test a page of a browser that runs on Sauce Labs, instead of on this machine
export const test = base.extend({
    page: async ({browserName}, use, testInfo) => {
        const browser = BROWSERS[browserName];
        const api = await request.newContext({
            httpCredentials: {username: USERNAME, password: ACCESS_KEY, send: 'always'},
        });

        // Asks Sauce Labs for the browser. It redirects (303) until the browser is ready
        let response = await api.post(`${SAUCE_URL}/playwright/session`, {
            data: {
                browserName: browser.sauceName,
                platformName: 'Linux',
                playwrightVersion: PLAYWRIGHT_VERSION,
                'sauce:options': {
                    name: `${testInfo.title} - ${browserName}`,
                    build: 'Elemental Selenium - Tip 41 - Playwright',
                },
            },
            maxRedirects: 0,
        });
        while (response.status() === 303) {
            response = await api.get(response.headers()['location'], {maxRedirects: 0});
        }
        const {sessionId, wsEndpoint} = (await response.json()).value;

        // Connects to the browser with the Playwright protocol
        const remoteBrowser = await browser.type.connect(`${wsEndpoint}?browser=${browserName}`);
        await use(await remoteBrowser.newPage());
        await remoteBrowser.close();

        // Marks the job as passed or failed on Sauce Labs
        await api.put(`${SAUCE_API_URL}/rest/v1/${USERNAME}/jobs/${sessionId}`, {
            data: {passed: testInfo.status === testInfo.expectedStatus},
        });
        await api.dispose();
        console.log(`See the job at https://app.saucelabs.com/tests/${sessionId}`);
    },
});
