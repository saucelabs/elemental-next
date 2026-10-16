const assert = require("assert");
const {Builder} = require("selenium-webdriver");

const SAUCE_URL = "https://ondemand.us-west-1.saucelabs.com/wd/hub";
const BROWSERS = ["chrome", "firefox", "MicrosoftEdge"];

for (const browser of BROWSERS) {
    describe(`One test on ${browser}`, function () {
        let driver;

        beforeEach(async function () {
            if (!process.env.SAUCE_USERNAME || !process.env.SAUCE_ACCESS_KEY) {
                console.log("Set SAUCE_USERNAME and SAUCE_ACCESS_KEY to run this test on Sauce Labs");
                this.skip();
            }

            driver = await new Builder()
                .usingServer(SAUCE_URL)
                .withCapabilities({
                    browserName: browser,
                    browserVersion: "latest",
                    platformName: "Windows 11",
                    "sauce:options": {
                        username: process.env.SAUCE_USERNAME,
                        accessKey: process.env.SAUCE_ACCESS_KEY,
                        name: `Elemental Selenium - Tip 41 - JavaScript - ${browser}`,
                    },
                })
                .build();
        });

        afterEach(async function () {
            if (driver) {
                await driver.quit();
            }
        });

        it("loads the page", async function () {
            await driver.get("https://the-internet.herokuapp.com");
            assert.strictEqual(await driver.getTitle(), "The Internet");
        });
    });
}
