const assert = require("assert");
const {Builder, By} = require("selenium-webdriver");

describe("Notification Message", function () {
    // The page shows the successful message only some of the time, so this test is flaky on purpose.
    // If it fails, Mocha runs it again (with its hooks), up to 9 more times.
    this.retries(9);

    let driver;

    beforeEach(async function () {
        driver = await new Builder().forBrowser("firefox").build();
    });

    afterEach(async function () {
        await driver.quit();
    });

    it("is successful", async function () {
        await driver.get("https://the-internet.herokuapp.com/notification_message");
        const message = await driver.findElement(By.id("flash")).getText();
        assert(message.includes("Action successful"), message);
    });
});
