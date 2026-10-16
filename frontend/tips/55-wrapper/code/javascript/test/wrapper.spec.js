const assert = require("assert");
const {Builder, By} = require("selenium-webdriver");
const Wrapper = require("../wrapper");

describe("Wrapper", function () {
    let driver;

    beforeEach(async function () {
        driver = new Wrapper(await new Builder().forBrowser("firefox").build());
    });

    afterEach(async function () {
        await driver.quit();
    });

    it("logs every action", async function () {
        await driver.get("https://the-internet.herokuapp.com");
        const link = await driver.findElement(By.linkText("Checkboxes"));
        await link.click();

        assert.deepStrictEqual(driver.messages, [
            "Navigated to https://the-internet.herokuapp.com",
            "Finding element Checkboxes",
            "Found element Checkboxes",
            "Clicking on Checkboxes",
            "URL changed to https://the-internet.herokuapp.com/checkboxes",
        ]);
    });
});
