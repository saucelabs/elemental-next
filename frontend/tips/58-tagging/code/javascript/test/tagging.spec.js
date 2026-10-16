const assert = require("assert");
const {Builder} = require("selenium-webdriver");

describe("The Internet", function () {
    let driver;

    beforeEach(async function () {
        driver = await new Builder().forBrowser("firefox").build();
    });

    afterEach(async function () {
        await driver.quit();
    });

    it("has the right title @smoke", async function () {
        await driver.get("https://the-internet.herokuapp.com");
        assert.strictEqual(await driver.getTitle(), "The Internet");
    });

    // This test is not finished yet, so it fails. Since it's tagged as @wip, it doesn't run with `--grep @smoke`.
    it("is a work in progress @wip", async function () {
        await driver.get("https://the-internet.herokuapp.com");
        assert.strictEqual(await driver.getTitle(), "Not finished yet");
    });
});
