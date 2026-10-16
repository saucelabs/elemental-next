const assert = require("assert");
const {Builder, By, until} = require("selenium-webdriver");

describe("JavaScript Alerts", function () {
    let driver;

    beforeEach(async function () {
        driver = await new Builder().forBrowser("firefox").build();
        await driver.get("https://the-internet.herokuapp.com/javascript_alerts");
        const buttons = await driver.findElements(By.css("button"));
        await buttons[1].click();
    });

    afterEach(async function () {
        await driver.quit();
    });

    it("accepts the confirmation", async function () {
        const popup = await driver.wait(until.alertIsPresent(), 5000);
        await popup.accept();
        assert.strictEqual(await driver.findElement(By.id("result")).getText(), "You clicked: Ok");
    });

    it("dismisses the confirmation", async function () {
        const popup = await driver.wait(until.alertIsPresent(), 5000);
        await popup.dismiss();
        assert.strictEqual(await driver.findElement(By.id("result")).getText(), "You clicked: Cancel");
    });
});
