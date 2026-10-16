const assert = require("assert");
const {Builder, By, until, error} = require("selenium-webdriver");

describe("Exception Handling", function () {
    let driver;

    beforeEach(async function () {
        driver = await new Builder().forBrowser("firefox").build();
        await driver.get("https://the-internet.herokuapp.com/login");
        await driver.findElement(By.id("username")).sendKeys("tomsmith");
        await driver.findElement(By.id("password")).sendKeys("SuperSecretPassword!");
        await driver.findElement(By.css("#login button")).click();
        await driver.wait(until.elementLocated(By.css(".flash.success")), 10000);
    });

    afterEach(async function () {
        await driver.quit();
    });

    async function isDisplayed(locator) {
        try {
            return await driver.findElement(locator).isDisplayed();
        } catch (e) {
            if (e instanceof error.NoSuchElementError || e instanceof error.StaleElementReferenceError) {
                return false;
            }
            throw e;
        }
    }

    it("throws an error when looking for a missing element", async function () {
        await assert.rejects(driver.findElement(By.id("login")).isDisplayed(), error.NoSuchElementError);
    });

    it("does not display the login form", async function () {
        assert.strictEqual(await isDisplayed(By.id("login")), false);
    });
});
