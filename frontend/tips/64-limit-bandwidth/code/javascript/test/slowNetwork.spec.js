const assert = require("assert");
const {Builder, By} = require("selenium-webdriver");

describe("Slow network", function () {
    let driver;

    beforeEach(async function () {
        driver = await new Builder().forBrowser("chrome").build();
        // Every request waits half a second, downloads at 200 KB/s and uploads at 50 KB/s
        await driver.setNetworkConditions({
            latency: 500,
            download_throughput: 200 * 1024,
            upload_throughput: 50 * 1024,
        });
    });

    afterEach(async function () {
        if (driver) {
            await driver.quit();
        }
    });

    it("loads the page on a slow network", async function () {
        const start = performance.now();
        await driver.get("https://the-internet.herokuapp.com");
        const seconds = (performance.now() - start) / 1000;
        console.log(`The page loaded in ${seconds.toFixed(1)} seconds`);

        assert.strictEqual(await driver.findElement(By.css(".heading")).getText(), "Welcome to the-internet");
        // On a fast connection, the page loads in 1 or 2 seconds
        assert.ok(seconds >= 3);
    });
});
