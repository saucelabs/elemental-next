const assert = require("assert");
const {Builder} = require("selenium-webdriver");

describe("New Window and New Tab", function () {
    let driver;

    beforeEach(async function () {
        driver = await new Builder().forBrowser("firefox").build();
    });

    afterEach(async function () {
        await driver.quit();
    });

    it("opens new window", async function () {
        await driver.get("https://the-internet.herokuapp.com/windows");
        await driver.switchTo().newWindow('window');
        await driver.get("https://the-internet.herokuapp.com/typos");
        const windowHandles = await driver.getAllWindowHandles();
        assert(windowHandles.length === 2);
    });

    it("opens new tab", async function () {
        await driver.get("https://the-internet.herokuapp.com/windows");
        await driver.switchTo().newWindow('tab');
        await driver.get("https://the-internet.herokuapp.com/typos");
        const windowHandles = await driver.getAllWindowHandles();
        assert(windowHandles.length === 2);
    });
});
