const assert = require("assert");
const {Builder, By} = require("selenium-webdriver");

const MESSAGE = "Congratulations! You must have the proper credentials.";

describe("Basic Auth", function () {
    let driver;

    beforeEach(async function () {
        driver = await new Builder().forBrowser("firefox").build();
    });

    afterEach(async function () {
        await driver.quit();
    });

    it("passes the credentials in the URL", async function () {
        await driver.get("https://admin:admin@the-internet.herokuapp.com/basic_auth");
        const pageMessage = await driver.findElement(By.css(".example p")).getText();
        assert.strictEqual(pageMessage, MESSAGE);
    });

    it("reuses the credentials cached by the browser", async function () {
        await driver.get("https://admin:admin@the-internet.herokuapp.com/basic_auth");
        await driver.get("https://the-internet.herokuapp.com/basic_auth");
        const pageMessage = await driver.findElement(By.css(".example p")).getText();
        assert.strictEqual(pageMessage, MESSAGE);
    });
});
