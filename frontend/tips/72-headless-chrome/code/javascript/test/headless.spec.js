const assert = require("assert");
const {Builder} = require("selenium-webdriver");
const chrome = require("selenium-webdriver/chrome");

describe("Headless Chrome", function () {
    let driver;

    beforeEach(async function () {
        // Runs Chrome without a window
        const options = new chrome.Options().addArguments("--headless");
        driver = await new Builder().forBrowser("chrome").setChromeOptions(options).build();
    });

    afterEach(async function () {
        if (driver) {
            await driver.quit();
        }
    });

    it("loads the page", async function () {
        await driver.get("https://the-internet.herokuapp.com");
        assert.strictEqual(await driver.getTitle(), "The Internet");

        const userAgent = await driver.executeScript("return navigator.userAgent");
        console.log(userAgent);
        assert.ok(userAgent.includes("HeadlessChrome"));
    });
});
