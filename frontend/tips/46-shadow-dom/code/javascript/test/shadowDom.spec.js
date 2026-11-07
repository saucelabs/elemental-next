const assert = require("assert");
const {Builder, By} = require("selenium-webdriver");

describe("Shadow DOM", function () {
    let driver;

    beforeEach(async function () {
        driver = await new Builder().forBrowser("firefox").build();
        await driver.get("https://the-internet.herokuapp.com/shadowdom_advanced");
    });

    afterEach(async function () {
        await driver.quit();
    });

    it("clicks a button inside nested shadow roots", async function () {
        const outerRoot = await driver.findElement(By.id("outer-card")).getShadowRoot();
        const innerCard = await outerRoot.findElement(By.css("#inner-card"));
        const innerRoot = await innerCard.getShadowRoot();
        const button = await innerRoot.findElement(By.css("#inner-button"));
        await button.click();

        const result = await driver.findElement(By.id("nested-result")).getText();
        assert.equal(result, "You clicked the button in the inner shadow root");
    });

    it("a normal locator does not find it", async function () {
        const buttons = await driver.findElements(By.css("#inner-button"));
        assert.equal(buttons.length, 0);
    });
});
