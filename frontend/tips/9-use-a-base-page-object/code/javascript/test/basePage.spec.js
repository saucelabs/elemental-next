const assert = require("assert");
const {Builder} = require("selenium-webdriver");
const DynamicLoadingPage = require("../pages/dynamicLoadingPage");
const LoginPage = require("../pages/loginPage");

describe("Base Page Object", function () {
    let driver;

    beforeEach(async function () {
        driver = await new Builder().forBrowser("firefox").build();
    });

    afterEach(async function () {
        await driver.quit();
    });

    it("displays Hello World! after loading", async function () {
        const dynamicLoading = new DynamicLoadingPage(driver);
        await dynamicLoading.load();
        await dynamicLoading.start();
        assert.strictEqual(await dynamicLoading.finishText(), "Hello World!");
    });

    it("logs in with valid credentials", async function () {
        const login = new LoginPage(driver);
        await login.load();
        await login.loginAs("tomsmith", "SuperSecretPassword!");
        assert(await login.successMessagePresent());
    });
});
