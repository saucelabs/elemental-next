const assert = require("assert");
const {Builder} = require("selenium-webdriver");

const STATUS_CODE_SCRIPT = "return performance.getEntriesByType('navigation')[0].responseStatus";

describe("HTTP Status Codes", function () {
    let driver;

    beforeEach(async function () {
        driver = await new Builder().forBrowser("firefox").build();
    });

    afterEach(async function () {
        await driver.quit();
    });

    async function statusCode() {
        return driver.executeScript(STATUS_CODE_SCRIPT);
    }

    for (const expected of [200, 301, 404, 500]) {
        it(`retrieves the ${expected} status code`, async function () {
            await driver.get(`https://the-internet.herokuapp.com/status_codes/${expected}`);
            assert.strictEqual(await statusCode(), expected);
        });
    }
});
