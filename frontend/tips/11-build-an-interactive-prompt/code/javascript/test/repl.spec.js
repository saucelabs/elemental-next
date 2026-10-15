const assert = require("assert");
const {Builder} = require("selenium-webdriver");
const {runRepl} = require("../repl");

describe("Interactive Prompt", function () {
    let driver;

    beforeEach(async function () {
        driver = await new Builder().forBrowser("firefox").build();
    });

    afterEach(async function () {
        await driver.quit();
    });

    it("evaluates Selenium commands", async function () {
        const commands = [
            "driver.get('https://the-internet.herokuapp.com')",
            "driver.getTitle()",
            "driver.findElement(By.id('does-not-exist'))",
            "q",
        ];
        const output = [];

        await runRepl(driver, async () => commands.shift(), (line) => output.push(line));

        assert.strictEqual(output[0], "The Internet");
        assert(output[1].startsWith("NoSuchElementError"));
        assert.strictEqual(output[2], "Quitting...");
    });
});
