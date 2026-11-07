const assert = require("assert");
const path = require("path");
const {Builder, By} = require("selenium-webdriver");
const chrome = require("selenium-webdriver/chrome");
const remote = require("selenium-webdriver/remote");

const SAUCE_URL = "https://ondemand.us-west-1.saucelabs.com/wd/hub";

describe("Upload to a remote browser", function () {
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
            name: "Elemental Selenium - Tip 68 - JavaScript",
        });
        driver = await new Builder().usingServer(SAUCE_URL).forBrowser("chrome").setChromeOptions(options).build();
        // Sends the files typed in a file input to the remote machine
        driver.setFileDetector(new remote.FileDetector());
    });

    afterEach(async function () {
        if (driver) {
            await driver.quit();
        }
    });

    it("uploads a file", async function () {
        const filename = "some-file.txt";
        const file = path.join(__dirname, "..", filename);
        await driver.get("https://the-internet.herokuapp.com/upload");
        await driver.findElement(By.id("file-upload")).sendKeys(file);
        await driver.findElement(By.id("file-submit")).click();
        assert.strictEqual(await driver.findElement(By.id("uploaded-files")).getText(), filename);
    });
});
