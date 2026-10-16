const assert = require("assert");
const {Builder, By} = require("selenium-webdriver");

const HIGHLIGHT_STYLE = "border: 2px solid red; border-style: dashed;";

describe("Highlight Elements", function () {
    let driver;

    beforeEach(async function () {
        driver = await new Builder().forBrowser("firefox").build();
        await driver.get("https://the-internet.herokuapp.com/large");
    });

    afterEach(async function () {
        await driver.quit();
    });

    async function highlight(element, duration = 3) {
        // store the original style so it can be reset later
        const originalStyle = (await element.getDomAttribute("style")) || "";
        // style the element with a red dashed border
        await driver.executeScript("arguments[0].setAttribute('style', arguments[1])", element, HIGHLIGHT_STYLE);
        // keep the element highlighted for a spell and then revert
        if (duration > 0) {
            await driver.sleep(duration * 1000);
            await driver.executeScript("arguments[0].setAttribute('style', arguments[1])", element, originalStyle);
        }
    }

    it("highlights an element", async function () {
        const element = await driver.findElement(By.id("sibling-2.3"));
        await highlight(element, 0);
        assert((await element.getDomAttribute("style")).includes("dashed"));
    });

    it("reverts the style afterward", async function () {
        const element = await driver.findElement(By.id("sibling-2.3"));
        await highlight(element, 1);
        assert(!((await element.getDomAttribute("style")) || "").includes("dashed"));
    });
});
