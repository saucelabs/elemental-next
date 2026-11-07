const assert = require("assert");
const {Builder, By} = require("selenium-webdriver");

describe("Find by role", function () {
    let driver;

    beforeEach(async function () {
        driver = await new Builder().forBrowser("firefox").build();
    });

    afterEach(async function () {
        await driver.quit();
    });

    async function findByRole(role, name) {
        // The browser computes the role and the accessible name of each element, as a screen reader sees them
        for (const element of await driver.findElements(By.css(`[role="${role}"]`))) {
            if (await element.getAriaRole() === role && await element.getAccessibleName() === name) {
                return element;
            }
        }
        throw new Error(`No ${role} named "${name}"`);
    }

    it("picks a fruit", async function () {
        await driver.get("https://the-internet.herokuapp.com/custom_dropdown");

        await (await findByRole("combobox", "Fruit")).click();
        await (await findByRole("option", "Mango")).click();

        assert.equal(await (await findByRole("combobox", "Fruit")).getText(), "Mango");
        assert.equal(await driver.findElement(By.id("result")).getText(), "Selected: mango");
    });
});
