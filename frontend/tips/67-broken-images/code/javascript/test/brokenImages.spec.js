const assert = require("assert");
const {Builder, By} = require("selenium-webdriver");

const LOADED_SCRIPT = 'return arguments[0].complete && typeof arguments[0].naturalWidth != "undefined" ' +
    "&& arguments[0].naturalWidth > 0";

describe("Broken Images", function () {
    let driver;
    let allImages;

    beforeEach(async function () {
        driver = await new Builder().forBrowser("firefox").build();
        await driver.get("https://the-internet.herokuapp.com/broken_images");
        allImages = await driver.findElements(By.tagName("img"));
    });

    afterEach(async function () {
        await driver.quit();
    });

    it("finds them with an HTTP library", async function () {
        const brokenImages = [];
        for (const image of allImages) {
            const source = await image.getAttribute("src");
            const response = await fetch(source);
            if (response.status !== 200) {
                brokenImages.push(source);
            }
        }
        console.log(brokenImages);
        assert.deepStrictEqual(brokenImages.map((source) => source.split("/").pop()), ["asdf.jpg", "hjkl.jpg"]);
    });

    it("finds them with JavaScript", async function () {
        const sources = [];
        for (const image of allImages) {
            if (!(await driver.executeScript(LOADED_SCRIPT, image))) {
                sources.push(await image.getDomAttribute("src"));
            }
        }
        console.log(sources);
        assert.deepStrictEqual(sources, ["asdf.jpg", "hjkl.jpg"]);
    });
});
