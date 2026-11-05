const assert = require("assert");
const {Builder} = require("selenium-webdriver");

describe("Chrome", function () {
    let driver;

    beforeEach(async function () {
        // Selenium Manager finds Chrome and the matching ChromeDriver, and downloads them when they are missing
        driver = await new Builder().forBrowser("chrome").build();
    });

    afterEach(async function () {
        if (driver) {
            await driver.quit();
        }
    });

    it("loads the page", async function () {
        await driver.get("https://the-internet.herokuapp.com");
        assert.strictEqual(await driver.getTitle(), "The Internet");
        const capabilities = await driver.getCapabilities();
        const chrome = capabilities.get("chrome");
        console.log(`Chrome ${capabilities.getBrowserVersion()}, ` +
            `ChromeDriver ${chrome.chromedriverVersion.split(" ")[0]}`);
    });
});
