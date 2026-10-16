const assert = require("assert");
const {Builder, By} = require("selenium-webdriver");

describe("Checkboxes", function () {
    let driver;
    let checkboxes;

    beforeEach(async function () {
        driver = await new Builder().forBrowser("firefox").build();
        await driver.get("https://the-internet.herokuapp.com/checkboxes");
        checkboxes = await driver.findElements(By.css('input[type="checkbox"]'));
    });

    afterEach(async function () {
        await driver.quit();
    });

    it("looks up the checked attribute", async function () {
        console.log(await Promise.all(checkboxes.map((checkbox) => checkbox.getDomAttribute("checked"))));
        assert.strictEqual(await checkboxes[0].getDomAttribute("checked"), null);
        assert.notStrictEqual(await checkboxes[checkboxes.length - 1].getDomAttribute("checked"), null);
    });

    it("checks if the checkbox is selected", async function () {
        console.log(await Promise.all(checkboxes.map((checkbox) => checkbox.isSelected())));
        assert.strictEqual(await checkboxes[0].isSelected(), false);
        assert.strictEqual(await checkboxes[checkboxes.length - 1].isSelected(), true);
    });
});
