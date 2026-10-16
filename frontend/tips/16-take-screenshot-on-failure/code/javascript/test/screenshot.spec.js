const assert = require("assert");
const fs = require("fs");
const {Builder, By} = require("selenium-webdriver");

describe("Screenshot", function () {
    let driver;

    beforeEach(async function () {
        driver = await new Builder().forBrowser("firefox").build();
    });

    afterEach(async function () {
        if (this.currentTest.state === "failed") {
            const testName = this.currentTest.fullTitle().replace(/\s/g, "-");
            fs.writeFileSync(`failshot_${testName}.png`, await driver.takeScreenshot(), "base64");
        }
        await driver.quit();
    });

    it("fails on purpose", async function () {
        await driver.get("https://the-internet.herokuapp.com");
        const heading = await driver.findElement(By.css("h1")).getText();
        assert.strictEqual(heading, "blah blah blah");
    });
});
