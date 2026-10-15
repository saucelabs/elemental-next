const assert = require("assert");
const {Builder} = require("selenium-webdriver");
const DynamicLoadingPage = require("../pages/dynamicLoadingPage");

describe("Dynamic Loading with a Page Object", function () {
    let driver;
    let dynamicLoading;

    beforeEach(async function () {
        driver = await new Builder().forBrowser("firefox").build();
        dynamicLoading = new DynamicLoadingPage(driver);
        await dynamicLoading.visit();
    });

    afterEach(async function () {
        await driver.quit();
    });

    it("displays Hello World! after loading", async function () {
        await dynamicLoading.start();
        await dynamicLoading.waitForFinish();
        assert.strictEqual(await dynamicLoading.finishText(), "Hello World!");
    });
});
