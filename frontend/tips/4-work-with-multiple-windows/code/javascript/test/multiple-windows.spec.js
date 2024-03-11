const assert = require("assert");
const {Builder, By} = require("selenium-webdriver");

describe("Multiple Windows", function () {
    let driver;

    beforeEach(async function () {
        driver = await new Builder().forBrowser("firefox").build();
    });

    afterEach(async function () {
        await driver.quit();
    });

    it("non-deterministic switching", async function () {
        await driver.get("https://the-internet.herokuapp.com/windows");
        await driver.findElement(By.css(".example a")).click();
        const windowHandles = await driver.getAllWindowHandles();
        await driver.switchTo().window(windowHandles[0]);
        assert((await driver.getTitle()) === "The Internet");
        await driver.switchTo().window(windowHandles[windowHandles.length - 1]);
        // Waiting for the new window to have a title, then we consider it is loaded
        await driver.wait(async function () {
            return (await driver.getTitle()) !== "";
        }, 2000);
        assert((await driver.getTitle()) === "New Window");
    });

    it("browser agnostic switching", async function () {
        await driver.get("https://the-internet.herokuapp.com/windows");
        const windowHandlesBefore = await driver.getAllWindowHandles();
        await driver.findElement(By.css(".example a")).click();
        const windowHandlesAfter = await driver.getAllWindowHandles();
        const newWindow = windowHandlesAfter.find(
            handle => !windowHandlesBefore.includes(handle)
        );
        await driver.switchTo().window(windowHandlesBefore[0]);
        assert((await driver.getTitle()) === "The Internet");
        await driver.switchTo().window(newWindow);
        // Waiting for the new window to have a title, then we consider it is loaded
        await driver.wait(async function () {
            return (await driver.getTitle()) !== "";
        }, 2000);
        assert((await driver.getTitle()) === "New Window");
    });
});
