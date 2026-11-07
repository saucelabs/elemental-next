const assert = require("assert");
const {Builder, By, until} = require("selenium-webdriver");
const chrome = require("selenium-webdriver/chrome");
const {Network} = require("selenium-webdriver/bidi/network");
const {AddInterceptParameters} = require("selenium-webdriver/bidi/addInterceptParameters");
const {InterceptPhase} = require("selenium-webdriver/bidi/interceptPhase");
const {UrlPattern} = require("selenium-webdriver/bidi/urlPattern");
const {ProvideResponseParameters} = require("selenium-webdriver/bidi/provideResponseParameters");
const {BytesValue, Header} = require("selenium-webdriver/bidi/networkTypes");

describe("Mock responses", function () {
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

    it("shows the mocked answer", async function () {
        const network = await Network(driver);
        // Pauses the calls to /slow_api/data, with any query string
        const api = new UrlPattern().hostname("the-internet.herokuapp.com").pathname("/slow_api/data");
        await network.addIntercept(new AddInterceptParameters(InterceptPhase.BEFORE_REQUEST_SENT).urlPattern(api));
        await network.beforeRequestSent(async (event) => {
            if (new URL(event.request.url).pathname === "/slow_api/data") {
                await network.provideResponse(new ProvideResponseParameters(event.request.request)
                    .statusCode(200)
                    .headers([new Header("Content-Type", new BytesValue(BytesValue.Type.STRING, "application/json"))])
                    .body(new BytesValue(BytesValue.Type.STRING, JSON.stringify({message: "Hello from the mock"}))));
            }
        });

        await driver.get("https://the-internet.herokuapp.com/slow_api");
        await driver.findElement(By.id("call-api")).click();
        const status = await driver.findElement(By.id("status-text"));
        await driver.wait(until.elementTextIs(status, "Hello from the mock"), 5000);
        const attempt = await driver.findElement(By.css("#attempts li")).getText();
        assert.equal(attempt, "200: Hello from the mock");
    });
});
