const assert = require("assert");
const {Builder, By, Key} = require("selenium-webdriver");

describe("Key Presses", function () {
    let driver;

    beforeEach(async function () {
        driver = await new Builder().forBrowser("firefox").build();
        await driver.get("https://the-internet.herokuapp.com/key_presses");
    });

    afterEach(async function () {
        await driver.quit();
    });

    it("sends keys to an element", async function () {
        await driver.findElement(By.id("target")).sendKeys(Key.SPACE);
        assert.strictEqual(await driver.findElement(By.id("result")).getText(), "You entered: SPACE");
    });

    it("sends keys without an element", async function () {
        await driver.actions().sendKeys(Key.TAB).perform();
        assert.strictEqual(await driver.findElement(By.id("result")).getText(), "You entered: TAB");
    });
});
