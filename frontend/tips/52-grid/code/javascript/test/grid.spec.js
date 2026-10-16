const assert = require("assert");
const {Builder} = require("selenium-webdriver");
const firefox = require("selenium-webdriver/firefox");

const GRID_URL = process.env.GRID_URL || "http://localhost:4444";

async function gridIsRunning() {
    try {
        return (await fetch(`${GRID_URL}/status`)).ok;
    } catch (error) {
        return false;
    }
}

describe("Selenium Grid", function () {
    let driver;

    beforeEach(async function () {
        if (!(await gridIsRunning())) {
            console.log(`Start a Selenium Grid on ${GRID_URL} (or set GRID_URL) to run this test`);
            this.skip();
        }
        driver = await new Builder()
            .usingServer(GRID_URL)
            .forBrowser("firefox")
            .setFirefoxOptions(new firefox.Options())
            .build();
    });

    afterEach(async function () {
        if (driver) {
            await driver.quit();
        }
    });

    it("loads the page", async function () {
        await driver.get("https://the-internet.herokuapp.com");
        assert.strictEqual(await driver.getTitle(), "The Internet");
    });
});
