const assert = require("assert");
const {Builder, By} = require("selenium-webdriver");

const BASE_URL = "https://the-internet.herokuapp.com";

describe("Reuse a login", function () {
    let sessionCookie;
    let driver;

    before(async function () {
        // Logs in through the form once, and keeps the session cookie of the logged-in user
        const driver = await new Builder().forBrowser("firefox").build();
        try {
            await driver.get(`${BASE_URL}/login`);
            await driver.findElement(By.id("username")).sendKeys("tomsmith");
            await driver.findElement(By.id("password")).sendKeys("SuperSecretPassword!");
            await driver.findElement(By.css("button[type='submit']")).click();
            sessionCookie = await driver.manage().getCookie("rack.session");
        } finally {
            await driver.quit();
        }
    });

    beforeEach(async function () {
        driver = await new Builder().forBrowser("firefox").build();
        // A cookie can only be added for the site of the current page
        await driver.get(BASE_URL);
        await driver.manage().addCookie({name: sessionCookie.name, value: sessionCookie.value});
    });

    afterEach(async function () {
        await driver.quit();
    });

    it("the secure area shows the user", async function () {
        await driver.get(`${BASE_URL}/secure`);

        assert.equal(await driver.findElement(By.id("username")).getText(), "tomsmith");
    });

    it("logs out", async function () {
        await driver.get(`${BASE_URL}/secure`);
        await driver.findElement(By.css("a[href='/logout']")).click();

        const flash = await driver.findElement(By.id("flash")).getText();
        assert.ok(flash.includes("You logged out of the secure area!"));
    });
});
