const assert = require("assert");
const fs = require("fs");
const os = require("os");
const path = require("path");
const {Builder} = require("selenium-webdriver");

describe("Print to PDF", function () {
    let driver;

    beforeEach(async function () {
        driver = await new Builder().forBrowser("firefox").build();
    });

    afterEach(async function () {
        await driver.quit();
    });

    it("prints the page to PDF", async function () {
        await driver.get("https://the-internet.herokuapp.com/tables");

        const pdf = Buffer.from(await driver.printPage({orientation: "landscape"}), "base64");

        // Every PDF file starts with %PDF-
        assert.equal(pdf.subarray(0, 5).toString(), "%PDF-");
        const file = path.join(fs.mkdtempSync(path.join(os.tmpdir(), "pdf-")), "tables.pdf");
        fs.writeFileSync(file, pdf);
        console.log(`Saved ${file}`);
    });
});
