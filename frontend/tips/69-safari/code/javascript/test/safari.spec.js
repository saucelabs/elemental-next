const assert = require("assert");
const {Builder} = require("selenium-webdriver");

describe("Safari", function () {
    let driver;

    before(function () {
        // Safari runs on macOS only, so the test is skipped on Windows and Linux
        if (process.platform !== "darwin") {
            this.skip();
        }
    });

    beforeEach(async function () {
        driver = await new Builder().forBrowser("safari").build();
    });

    afterEach(async function () {
        if (driver) {
            await driver.quit();
        }
    });

    it("loads the page", async function () {
        await driver.get("https://the-internet.herokuapp.com");
        const capabilities = await driver.getCapabilities();
        console.log(`${capabilities.getBrowserName()} ${capabilities.getBrowserVersion()}`);

        assert.strictEqual(await driver.getTitle(), "The Internet");
    });
});
