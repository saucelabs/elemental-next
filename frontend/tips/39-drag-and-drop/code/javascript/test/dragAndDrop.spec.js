const assert = require("assert");
const fs = require("fs");
const path = require("path");
const {Builder, By} = require("selenium-webdriver");

describe("HTML5 Drag and Drop", function () {
    let driver;

    beforeEach(async function () {
        driver = await new Builder().forBrowser("firefox").build();
    });

    afterEach(async function () {
        await driver.quit();
    });

    it("swaps the columns", async function () {
        await driver.get("https://the-internet.herokuapp.com/drag_and_drop");
        const dndJavascript = fs.readFileSync(path.join(__dirname, "..", "dnd.js"), "utf8");
        await driver.executeScript(dndJavascript + "$('#column-a').simulateDragDrop({ dropTarget: '#column-b'});");
        assert.strictEqual(await driver.findElement(By.id("column-a")).getText(), "B");
        assert.strictEqual(await driver.findElement(By.id("column-b")).getText(), "A");
    });
});
