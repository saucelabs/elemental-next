const assert = require("assert");
const {Builder, By} = require("selenium-webdriver");

describe("Disabled Element", function () {
    let driver;

    beforeEach(async function () {
        driver = await new Builder().forBrowser("firefox").build();
    });

    afterEach(async function () {
        await driver.quit();
    });

    async function option(text) {
        for (const option of await driver.findElements(By.tagName("option"))) {
            if ((await option.getText()) === text) {
                return option;
            }
        }
        throw new Error(`No option with the text "${text}"`);
    }

    it("finds the disabled option", async function () {
        await driver.get("https://the-internet.herokuapp.com/dropdown");
        assert.strictEqual(await (await option("Please select an option")).isEnabled(), false);
        assert.strictEqual(await (await option("Option 1")).isEnabled(), true);
    });
});
