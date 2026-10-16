const assert = require("assert");
const {Builder, By, until, error} = require("selenium-webdriver");

const BASE_URL = "https://the-internet.herokuapp.com/dynamic_loading";

describe("Waiting", function () {
    let driver;

    beforeEach(async function () {
        driver = await new Builder().forBrowser("firefox").build();
    });

    afterEach(async function () {
        await driver.quit();
    });

    it("gives up with an implicit wait before the element is rendered", async function () {
        await driver.manage().setTimeouts({implicit: 3000});
        await driver.get(`${BASE_URL}/2`);
        await driver.findElement(By.css("#start button")).click();
        await assert.rejects(driver.findElement(By.id("finish")), error.NoSuchElementError);
    });

    it("does not wait for hidden elements with an implicit wait", async function () {
        await driver.manage().setTimeouts({implicit: 3000});
        await driver.get(`${BASE_URL}/1`);
        await driver.findElement(By.css("#start button")).click();
        assert.strictEqual(await driver.findElement(By.id("finish")).isDisplayed(), false);
    });

    for (const example of ["1", "2"]) {
        it(`waits with an explicit wait in example ${example}`, async function () {
            await driver.get(`${BASE_URL}/${example}`);
            await driver.findElement(By.css("#start button")).click();
            const finish = await driver.wait(until.elementLocated(By.id("finish")), 10000);
            await driver.wait(until.elementIsVisible(finish), 10000);
            assert.strictEqual(await finish.getText(), "Hello World!");
        });
    }
});
