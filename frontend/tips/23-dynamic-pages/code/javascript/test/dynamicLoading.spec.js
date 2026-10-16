const assert = require("assert");
const {Builder, By, until} = require("selenium-webdriver");

describe("Dynamic Pages", function () {
    let driver;

    beforeEach(async function () {
        driver = await new Builder().forBrowser("firefox").build();
    });

    afterEach(async function () {
        await driver.quit();
    });

    async function waitForDisplayed(locator, seconds = 10) {
        const element = await driver.wait(until.elementLocated(locator), seconds * 1000);
        await driver.wait(until.elementIsVisible(element), seconds * 1000);
    }

    for (const [example, description] of [["1", "a hidden element"], ["2", "an element rendered after"]]) {
        it(`waits for ${description}`, async function () {
            await driver.get(`https://the-internet.herokuapp.com/dynamic_loading/${example}`);
            await driver.findElement(By.css("#start button")).click();
            await waitForDisplayed(By.id("finish"));
            assert(await driver.findElement(By.id("finish")).isDisplayed());
        });
    }
});
