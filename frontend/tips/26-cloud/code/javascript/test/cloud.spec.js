const assert = require("assert");
const {Builder} = require("selenium-webdriver");
const chrome = require("selenium-webdriver/chrome");

const SAUCE_URL = "https://ondemand.us-west-1.saucelabs.com/wd/hub";

describe("Cloud", function () {
    let driver;

    beforeEach(async function () {
        if (!process.env.SAUCE_USERNAME || !process.env.SAUCE_ACCESS_KEY) {
            console.log("Set SAUCE_USERNAME and SAUCE_ACCESS_KEY to run this test on Sauce Labs");
            this.skip();
        }

        const options = new chrome.Options();
        options.setBrowserVersion("latest");
        options.setPlatform("Windows 11");
        options.set("sauce:options", {
            username: process.env.SAUCE_USERNAME,
            accessKey: process.env.SAUCE_ACCESS_KEY,
            name: "Elemental Selenium - Tip 26 - JavaScript",
        });
        driver = await new Builder().usingServer(SAUCE_URL).forBrowser("chrome").setChromeOptions(options).build();
    });

    afterEach(async function () {
        if (driver) {
            await driver.quit();
        }
    });

    it("loads the page", async function () {
        await driver.get("https://the-internet.herokuapp.com");
        assert((await driver.getTitle()).includes("The Internet"));
    });
});
