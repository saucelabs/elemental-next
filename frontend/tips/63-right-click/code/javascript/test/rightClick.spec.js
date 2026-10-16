const assert = require("assert");
const {Builder, By, until} = require("selenium-webdriver");

describe("Right Click", function () {
    let driver;

    beforeEach(async function () {
        driver = await new Builder().forBrowser("firefox").build();
    });

    afterEach(async function () {
        await driver.quit();
    });

    it("opens the context menu", async function () {
        await driver.get("https://the-internet.herokuapp.com/context_menu");
        const menuArea = await driver.findElement(By.id("hot-spot"));
        await driver.actions().contextClick(menuArea).perform();

        const alert = await driver.wait(until.alertIsPresent(), 5000);
        assert.strictEqual(await alert.getText(), "You selected a context menu");
        await alert.accept();
    });
});
