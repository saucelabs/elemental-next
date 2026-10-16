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

    it("has the right title", async function () {
        await driver.get("https://the-internet.herokuapp.com");
        assert.strictEqual(await driver.getTitle(), "The Internet");
    });
});
