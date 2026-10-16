const assert = require("assert");
const {Builder} = require("selenium-webdriver");

const SAUCE_URL = "https://ondemand.us-west-1.saucelabs.com/wd/hub";
const BROWSERS = ["chrome", "firefox", "MicrosoftEdge"];

async function runOn(browser) {
    const driver = await new Builder()
        .usingServer(SAUCE_URL)
        .withCapabilities({
            browserName: browser,
            browserVersion: "latest",
            platformName: "Windows 11",
            "sauce:options": {
                username: process.env.SAUCE_USERNAME,
                accessKey: process.env.SAUCE_ACCESS_KEY,
                name: `Elemental Selenium - Tip 42 - JavaScript - ${browser}`,
            },
        })
        .build();
    try {
        await driver.get("https://the-internet.herokuapp.com");
        assert.strictEqual(await driver.getTitle(), "The Internet");
    } finally {
        await driver.quit();
    }
}

describe("One test on multiple browsers, in parallel", function () {
    before(function () {
        if (!process.env.SAUCE_USERNAME || !process.env.SAUCE_ACCESS_KEY) {
            console.log("Set SAUCE_USERNAME and SAUCE_ACCESS_KEY to run this test on Sauce Labs");
            this.skip();
        }
    });

    it("loads the page on every browser", async function () {
        await Promise.all(BROWSERS.map((browser) => runOn(browser)));
    });
});
