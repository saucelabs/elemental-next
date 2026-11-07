const assert = require("assert");
const {Builder, By, until} = require("selenium-webdriver");
const chrome = require("selenium-webdriver/chrome");
const {Emulation} = require("selenium-webdriver/bidi/generated/emulation");
const {Permissions} = require("selenium-webdriver/bidi/generated/permissions");

describe("Emulate location", function () {
    let driver;
    let emulation;
    let tab;

    beforeEach(async function () {
        // Turns on WebDriver BiDi, which lets the test change what the browser reports
        const options = new chrome.Options().enableBidi();
        driver = await new Builder().forBrowser("chrome").setChromeOptions(options).build();
        emulation = await Emulation.create(driver);
        tab = [await driver.getWindowHandle()];
    });

    afterEach(async function () {
        if (driver) {
            await driver.quit();
        }
    });

    it("geolocation", async function () {
        const permissions = await Permissions.create(driver);
        await permissions.setPermission({
            descriptor: {name: "geolocation"}, state: "granted", origin: "https://the-internet.herokuapp.com"});
        await emulation.setGeolocationOverride({coordinates: {latitude: 52.52, longitude: 13.405}, contexts: tab});

        await driver.get("https://the-internet.herokuapp.com/geolocation");
        await driver.findElement(By.css("button")).click();
        await driver.wait(until.elementLocated(By.id("lat-value")), 5000);
        assert.equal(await driver.findElement(By.id("lat-value")).getText(), "52.52");
        assert.equal(await driver.findElement(By.id("long-value")).getText(), "13.405");
    });

    it("time zone and locale", async function () {
        await emulation.setTimezoneOverride({timezone: "Asia/Tokyo", contexts: tab});
        await emulation.setLocaleOverride({locale: "de-DE", contexts: tab});

        await driver.get("https://the-internet.herokuapp.com/locale");
        assert.equal(await driver.findElement(By.id("browser-timezone")).getText(), "Asia/Tokyo");
        assert.equal(await driver.findElement(By.id("browser-language")).getText(), "de-DE");
        assert.equal(await driver.findElement(By.id("formatted-date")).getText(), "Mittwoch, 15. April 2026 um 21:00");
        assert.equal(await driver.findElement(By.id("formatted-number")).getText(), "1.234.567,891");
        assert.equal(await driver.findElement(By.id("greeting")).getText(), "Hallo!");
    });
});
