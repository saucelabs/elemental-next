const assert = require("assert");
const {Builder, By} = require("selenium-webdriver");
const {PNG} = require("pngjs");

const URL = "https://the-internet.herokuapp.com/visual_diff";

describe("Compare screenshots", function () {
    let driver;

    beforeEach(async function () {
        driver = await new Builder().forBrowser("firefox").build();
    });

    afterEach(async function () {
        await driver.quit();
    });

    async function cardScreenshot(url) {
        await driver.get(url);
        const png = await driver.findElement(By.id("card")).takeScreenshot();
        return PNG.sync.read(Buffer.from(png, "base64"));
    }

    function differentPixels(image, other) {
        // Images of different sizes differ everywhere
        if (image.width !== other.width || image.height !== other.height) {
            return image.width * image.height;
        }
        let different = 0;
        // Each pixel takes 4 bytes: red, green, blue and alpha
        for (let i = 0; i < image.data.length; i += 4) {
            if (image.data.readUInt32BE(i) !== other.data.readUInt32BE(i)) {
                different++;
            }
        }
        return different;
    }

    it("the same card has no differences", async function () {
        const baseline = await cardScreenshot(URL);

        assert.equal(differentPixels(baseline, await cardScreenshot(URL)), 0);
    });

    it("a moved button is noticed", async function () {
        const baseline = await cardScreenshot(URL);

        assert.ok(differentPixels(baseline, await cardScreenshot(`${URL}?shift=10`)) > 0);
    });
});
