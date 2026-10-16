const assert = require("assert");
const {Builder, By} = require("selenium-webdriver");

describe("Hovers", function () {
    let driver;

    beforeEach(async function () {
        driver = await new Builder().forBrowser("firefox").build();
    });

    afterEach(async function () {
        await driver.quit();
    });

    it("displays the caption on hover", async function () {
        await driver.get("https://the-internet.herokuapp.com/hovers");
        const anAvatar = await driver.findElement(By.className("figure"));
        const caption = await anAvatar.findElement(By.className("figcaption"));
        assert.strictEqual(await caption.isDisplayed(), false);

        await driver.actions().move({origin: anAvatar}).perform();
        assert.strictEqual(await caption.isDisplayed(), true);
    });
});
