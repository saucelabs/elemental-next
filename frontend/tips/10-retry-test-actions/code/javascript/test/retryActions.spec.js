const assert = require("assert");
const {Builder, By} = require("selenium-webdriver");

async function retryIfMessageContains(failMessage, action, attempts = 10) {
    let message = await action();
    for (let attempt = 1; attempt < attempts && message.includes(failMessage); attempt++) {
        message = await action();
    }
    return message;
}

describe("Retry Test Actions", function () {
    let driver;

    beforeEach(async function () {
        driver = await new Builder().forBrowser("firefox").build();
    });

    afterEach(async function () {
        await driver.quit();
    });

    it("eventually displays a successful notification", async function () {
        const message = await retryIfMessageContains("please try again", async () => {
            await driver.get("https://the-internet.herokuapp.com/notification_message");
            return driver.findElement(By.id("flash")).getText();
        });
        assert(message.includes("Action successful"));
    });
});
