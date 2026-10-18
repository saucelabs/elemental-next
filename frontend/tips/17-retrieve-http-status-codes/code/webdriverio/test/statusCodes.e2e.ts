import {browser, expect} from '@wdio/globals';

async function statusCode() {
    return browser.execute(() =>
        (performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming).responseStatus);
}

describe('HTTP Status Codes', () => {
    for (const expected of [200, 301, 404, 500]) {
        it(`retrieves the ${expected} status code`, async () => {
            await browser.url(`https://the-internet.herokuapp.com/status_codes/${expected}`);

            expect(await statusCode()).toBe(expected);
        });
    }
});
