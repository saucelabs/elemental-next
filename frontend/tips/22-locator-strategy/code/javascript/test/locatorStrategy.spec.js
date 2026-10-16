const assert = require("assert");
const {Builder, By} = require("selenium-webdriver");

describe("Locator Strategy", function () {
    let driver;

    beforeEach(async function () {
        driver = await new Builder().forBrowser("firefox").build();
        await driver.get("https://the-internet.herokuapp.com/download");
    });

    afterEach(async function () {
        await driver.quit();
    });

    it("finds the first link on the page", async function () {
        const link = await driver.findElement(By.css("a")).getAttribute("href");
        console.log(link);
        assert(link.includes("github.com"));
    });

    it("finds the first link in the content", async function () {
        const link = await driver.findElement(By.css("#content a")).getAttribute("href");
        console.log(link);
        assert(link.includes("/download/"));
    });

    it("finds the first link in the example", async function () {
        const link = await driver.findElement(By.css("#content .example a")).getAttribute("href");
        console.log(link);
        assert(link.includes("/download/"));
    });
});
