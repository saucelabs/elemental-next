const assert = require("assert");
const fs = require("fs");
const os = require("os");
const path = require("path");
const {Builder, By} = require("selenium-webdriver");
const chrome = require("selenium-webdriver/chrome");

const SAUCE_URL = "https://ondemand.us-west-1.saucelabs.com/wd/hub";

describe("Download from a remote browser", function () {
    let driver;
    let targetDir;

    beforeEach(async function () {
        if (!process.env.SAUCE_USERNAME || !process.env.SAUCE_ACCESS_KEY) {
            console.log("Set SAUCE_USERNAME and SAUCE_ACCESS_KEY to run this test on Sauce Labs");
            this.skip();
        }

        const options = new chrome.Options();
        options.setBrowserVersion("latest");
        options.setPlatform("Windows 11");
        // Asks Sauce Labs to keep the files the browser downloads, so we can fetch them
        options.enableDownloads();
        options.set("sauce:options", {
            username: process.env.SAUCE_USERNAME,
            accessKey: process.env.SAUCE_ACCESS_KEY,
            name: "Elemental Selenium - Tip 28 - JavaScript",
        });
        driver = await new Builder().usingServer(SAUCE_URL).forBrowser("chrome").setChromeOptions(options).build();
        targetDir = fs.mkdtempSync(path.join(os.tmpdir(), "downloads-"));
    });

    afterEach(async function () {
        if (driver) {
            await driver.quit();
        }
        if (targetDir) {
            fs.rmSync(targetDir, {recursive: true, force: true});
        }
    });

    it("downloads a file", async function () {
        await driver.get("https://the-internet.herokuapp.com/download");
        const link = await driver.findElement(By.css(".example a"));
        const fileName = await link.getText();
        await link.click();

        // The file is downloaded on the remote machine, so we ask for the list of files
        await driver.wait(async () => (await driver.getDownloadableFiles()).includes(fileName), 10000);

        // Copies the file from the remote machine to a folder on this machine
        await driver.downloadFile(fileName, targetDir);
        const downloadedFile = path.join(targetDir, fileName);
        // downloadFile writes the file in the background, so we wait for it
        await driver.wait(() => fs.existsSync(downloadedFile), 5000);
        assert.ok(fs.statSync(downloadedFile).size > 0);
    });
});
