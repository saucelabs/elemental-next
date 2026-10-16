const assert = require("assert");
const {Builder, By} = require("selenium-webdriver");

describe("Download a File Revisited", function () {
    let driver;

    beforeEach(async function () {
        driver = await new Builder().forBrowser("firefox").build();
    });

    afterEach(async function () {
        await driver.quit();
    });

    it("file can be downloaded", async function () {
        await driver.get("https://the-internet.herokuapp.com/download");
        const link = await driver.findElement(By.css(".example a")).getAttribute("href");

        const response = await fetch(link, {method: "HEAD"});
        const contentType = response.headers.get("content-type");
        const contentLength = Number(response.headers.get("content-length"));

        assert.strictEqual(contentType, "application/octet-stream");
        assert(contentLength > 0);
    });
});
