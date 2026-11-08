import {test, expect} from '@playwright/test';
import {
    sauceVisualCheck, sauceVisualResults, sauceVisualSetup, sauceVisualTeardown,
} from '@saucelabs/visual-playwright';

test.skip(!process.env.SAUCE_USERNAME || !process.env.SAUCE_ACCESS_KEY,
    'Set SAUCE_USERNAME and SAUCE_ACCESS_KEY to send the snapshots to Sauce Labs');

// A Visual build groups the snapshots of a test run
test.beforeAll(async () => {
    await sauceVisualSetup({buildName: 'Elemental Selenium - Tip 74 - Playwright', region: 'us-west-1'});
});

test.afterAll(async () => {
    await sauceVisualTeardown();
});

test('newsletter card', async ({page}, testInfo) => {
    await page.goto('https://the-internet.herokuapp.com/visual_diff');

    // Takes a screenshot of the card only, and compares it with its baseline in Sauce Labs
    await sauceVisualCheck(page, testInfo, 'Newsletter card', {clipSelector: '#card'});

    // Waits for Sauce Labs to compare the snapshots. Changes show up there for review
    const results = await sauceVisualResults(testInfo);
    expect(results.ERRORED).toBe(0);
});
