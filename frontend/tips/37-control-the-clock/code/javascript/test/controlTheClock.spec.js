const assert = require("assert");
const {Builder, By} = require("selenium-webdriver");
const chrome = require("selenium-webdriver/chrome");
const {Script} = require("selenium-webdriver/bidi/generated/script");

// Replaces setTimeout with a fake one: its callbacks run only when the test moves the clock with fakeClock.tick
const FAKE_CLOCK = `() => {
    let now = 0;
    const timers = [];
    window.setTimeout = (callback, delay = 0) => timers.push({time: now + delay, callback});
    window.fakeClock = {
        tick: (milliseconds) => {
            now += milliseconds;
            timers.filter((timer) => !timer.done && timer.time <= now).forEach((timer) => {
                timer.done = true;
                timer.callback();
            });
        },
    };
}`;

describe("Control the clock", function () {
    let driver;

    beforeEach(async function () {
        // Turns on WebDriver BiDi, which lets the test add a script that runs before the page's scripts
        const options = new chrome.Options().enableBidi();
        driver = await new Builder().forBrowser("chrome").setChromeOptions(options).build();
    });

    afterEach(async function () {
        if (driver) {
            await driver.quit();
        }
    });

    it("the toast hides itself after one minute", async function () {
        const script = await Script.create(driver);
        await script.addPreloadScript({functionDeclaration: FAKE_CLOCK});

        await driver.get("https://the-internet.herokuapp.com/toasts?duration=60000");
        await driver.findElement(By.id("success-toast")).click();
        assert.equal(await driver.findElement(By.className("toast-message")).getText(), "Saved successfully");

        await driver.executeScript("fakeClock.tick(59000)");
        assert.equal((await driver.findElements(By.className("toast"))).length, 1);

        await driver.executeScript("fakeClock.tick(1000)");
        assert.equal((await driver.findElements(By.className("toast"))).length, 0);
    });
});
