const assert = require("assert");
const {Builder} = require("selenium-webdriver");

// The Navigation Timing API of the browser measures each step of the page load, in milliseconds
const TIMINGS = `
const timing = performance.getEntriesByType('navigation')[0];
return {
  firstByte: Math.round(timing.responseStart),
  domReady: Math.round(timing.domContentLoadedEventEnd),
  load: Math.round(timing.loadEventEnd),
};
`;
const LOAD_BUDGET_MS = 10000;

describe("Performance", function () {
    let driver;

    beforeEach(async function () {
        driver = await new Builder().forBrowser("chrome").build();
    });

    afterEach(async function () {
        if (driver) {
            await driver.quit();
        }
    });

    it("loads the page within the budget", async function () {
        await driver.get("https://the-internet.herokuapp.com");
        const timings = await driver.executeScript(TIMINGS);
        console.log(`First byte: ${timings.firstByte} ms, DOM ready: ${timings.domReady} ms, load: ${timings.load} ms`);

        // The load is 0 until the page has finished loading
        assert.ok(timings.load > 0 && timings.load < LOAD_BUDGET_MS);
    });
});
