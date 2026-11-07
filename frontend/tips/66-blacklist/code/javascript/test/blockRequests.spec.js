const assert = require("assert");
const {Builder} = require("selenium-webdriver");
const chrome = require("selenium-webdriver/chrome");
const {Network} = require("selenium-webdriver/bidi/network");
const {AddInterceptParameters} = require("selenium-webdriver/bidi/addInterceptParameters");
const {InterceptPhase} = require("selenium-webdriver/bidi/interceptPhase");

const SLOW_REQUEST = "https://the-internet.herokuapp.com/slow_external";

describe("Block requests", function () {
    let driver;

    beforeEach(async function () {
        // Turns on WebDriver BiDi, which lets the test intercept network requests
        const options = new chrome.Options().enableBidi();
        driver = await new Builder().forBrowser("chrome").setChromeOptions(options).build();
    });

    afterEach(async function () {
        if (driver) {
            await driver.quit();
        }
    });

    it("blocks the slow request", async function () {
        const blocked = [];
        const network = await Network(driver);
        await network.addIntercept(
            new AddInterceptParameters(InterceptPhase.BEFORE_REQUEST_SENT).urlStringPattern(SLOW_REQUEST));
        await network.beforeRequestSent(async (event) => {
            if (event.request.url === SLOW_REQUEST) {
                blocked.push(event.request.url);
                await network.failRequest(event.request.request);
            }
        });

        await driver.get("https://the-internet.herokuapp.com/slow");
        // jQuery.active counts the requests that are still running. The slow request takes 30 seconds,
        // so it reaches 0 in time only when the request is blocked.
        await driver.wait(async () => (await driver.executeScript("return jQuery.active")) === 0, 5000);
        assert.deepStrictEqual(blocked, [SLOW_REQUEST]);
    });
});
