const assert = require("assert");
const fs = require("fs");
const {Builder, By, until} = require("selenium-webdriver");
const chrome = require("selenium-webdriver/chrome");
const {Network} = require("selenium-webdriver/bidi/network");

const BASE_URL = "https://the-internet.herokuapp.com";
const HAR_FILE = "journey.har";

describe("Record a HAR file", function () {
    let driver;

    beforeEach(async function () {
        // Turns on WebDriver BiDi, which sends every request of the browser to the test
        const options = new chrome.Options().enableBidi();
        driver = await new Builder().forBrowser("chrome").setChromeOptions(options).build();
    });

    afterEach(async function () {
        if (driver) {
            await driver.quit();
        }
    });

    it("records the requests of a user journey", async function () {
        const entries = [];
        const network = await Network(driver);
        await network.beforeRequestSent((event) => {
            const {url, method} = event.request;
            // Keeps only the requests to the site under test, not the ones to third parties
            if (url.startsWith(BASE_URL)) {
                entries.push({
                    startedDateTime: new Date(event.timestamp).toISOString(),
                    request: {method, url},
                });
            }
        });

        await driver.get(BASE_URL);
        await driver.findElement(By.linkText("Dynamic Loading")).click();
        await driver.findElement(By.partialLinkText("Example 2")).click();
        await driver.findElement(By.css("#start button")).click();
        const finish = await driver.wait(until.elementLocated(By.id("finish")), 10000);
        await driver.wait(until.elementIsVisible(finish), 10000);
        assert.strictEqual(await finish.getText(), "Hello World!");

        const har = {log: {version: "1.2", creator: {name: "Elemental Selenium", version: "1.0"}, entries}};
        fs.writeFileSync(HAR_FILE, JSON.stringify(har, null, 2));

        const urls = entries.map((entry) => entry.request.url);
        for (const page of ["/", "/dynamic_loading", "/dynamic_loading/2"]) {
            assert.ok(urls.includes(BASE_URL + page), `Not recorded: ${page}`);
        }
    });
});
