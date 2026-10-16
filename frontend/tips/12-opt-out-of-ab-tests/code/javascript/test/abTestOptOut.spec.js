const assert = require("assert");
const {Builder, By, until} = require("selenium-webdriver");

describe("Opt out of A/B tests", function () {
    let driver;

    beforeEach(async function () {
        driver = await new Builder().forBrowser("firefox").build();
    });

    afterEach(async function () {
        await driver.quit();
    });

    it("forges the opt-out cookie on the target page", async function () {
        await driver.get("https://the-internet.herokuapp.com/abtest");
        let headingText = await driver.findElement(By.tagName("h3")).getText();
        assert(["A/B Test Variation 1", "A/B Test Control"].includes(headingText));
        await driver.manage().addCookie({name: "optimizelyOptOut", value: "true"});
        await driver.navigate().refresh();
        headingText = await driver.findElement(By.tagName("h3")).getText();
        assert.strictEqual(headingText, "No A/B Test");
    });

    it("forges the opt-out cookie before visiting the target page", async function () {
        await driver.get("https://the-internet.herokuapp.com");
        await driver.manage().addCookie({name: "optimizelyOptOut", value: "true"});
        await driver.get("https://the-internet.herokuapp.com/abtest");
        const headingText = await driver.findElement(By.tagName("h3")).getText();
        assert.strictEqual(headingText, "No A/B Test");
    });

    it("appends the opt-out parameter to the URL", async function () {
        await driver.get("https://the-internet.herokuapp.com/abtest?optimizely_opt_out=true");
        const alert = await driver.wait(until.alertIsPresent(), 10000);
        await alert.dismiss();
        const heading = await driver.wait(until.elementLocated(By.tagName("h3")), 10000);
        const headingText = await heading.getText();
        assert.strictEqual(headingText, "No A/B Test");
    });
});
