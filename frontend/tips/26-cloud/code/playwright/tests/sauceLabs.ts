import {test as base, chromium, request} from '@playwright/test';

const SAUCE_URL = 'https://ondemand.us-west-1.saucelabs.com';
const SAUCE_API_URL = 'https://api.us-west-1.saucelabs.com';
const USERNAME = process.env.SAUCE_USERNAME || '';
const ACCESS_KEY = process.env.SAUCE_ACCESS_KEY || '';
// Sauce Labs needs the major and minor version of Playwright, e.g. "1.61"
const PLAYWRIGHT_VERSION = require('@playwright/test/package.json').version.split('.').slice(0, 2).join('.');

// Gives each test a page of a browser that runs on Sauce Labs, instead of on this machine
export const test = base.extend({
    page: async ({}, use, testInfo) => {
        const api = await request.newContext({
            httpCredentials: {username: USERNAME, password: ACCESS_KEY, send: 'always'},
        });

        // Asks Sauce Labs for a browser. It redirects (303) until the browser is ready
        let response = await api.post(`${SAUCE_URL}/playwright/session`, {
            data: {
                browserName: 'chrome',
                platformName: 'Linux',
                playwrightVersion: PLAYWRIGHT_VERSION,
                'sauce:options': {name: testInfo.title, build: 'Elemental Selenium - Tip 26 - Playwright'},
            },
            maxRedirects: 0,
        });
        while (response.status() === 303) {
            response = await api.get(response.headers()['location'], {maxRedirects: 0});
        }
        const {sessionId, wsEndpoint} = (await response.json()).value;

        // Connects to the browser with the Playwright protocol
        const browser = await chromium.connect(`${wsEndpoint}?browser=chromium`);
        await use(await browser.newPage());
        await browser.close();

        // Marks the job as passed or failed on Sauce Labs
        await api.put(`${SAUCE_API_URL}/rest/v1/${USERNAME}/jobs/${sessionId}`, {
            data: {passed: testInfo.status === testInfo.expectedStatus},
        });
        await api.dispose();
        console.log(`See the job at https://app.saucelabs.com/tests/${sessionId}`);
    },
});
