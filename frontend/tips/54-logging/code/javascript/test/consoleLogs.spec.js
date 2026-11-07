const assert = require("assert");
const {Builder, By} = require("selenium-webdriver");
const chrome = require("selenium-webdriver/chrome");

describe("Console logs", function () {
    let driver;

    beforeEach(async function () {
        // Turns on WebDriver BiDi, which sends the console messages and errors of the page to the test
        const options = new chrome.Options().enableBidi();
        driver = await new Builder().forBrowser("chrome").setChromeOptions(options).build();
    });

    afterEach(async function () {
        if (driver) {
            await driver.quit();
        }
    });

    it("captures console messages and errors", async function () {
        const messages = [];
        const errors = [];
        await driver.script().addConsoleMessageHandler((entry) => messages.push(`${entry.level}: ${entry.text}`));
        await driver.script().addJavaScriptErrorHandler((entry) => errors.push(entry.text));

        await driver.get("https://the-internet.herokuapp.com/network_console");
        await driver.findElement(By.id("log-console")).click();
        await driver.findElement(By.id("throw-error")).click();

        await driver.wait(() => messages.length === 3 && errors.length === 1, 5000);
        // The messages can arrive in any order
        assert.deepStrictEqual(messages.sort(), [
            "error: the-internet: an error message",
            "info: the-internet: a log message",
            "warn: the-internet: a warning",
        ]);
        assert.deepStrictEqual(errors, ["Error: the-internet: thrown on purpose"]);
    });
});
