const assert = require("assert");
const {Builder, By, until} = require("selenium-webdriver");

const BASE_URL = "https://the-internet.herokuapp.com";

describe("Download Secure Files", function () {
    let driver;

    beforeEach(async function () {
        driver = await new Builder().forBrowser("firefox").build();
    });

    afterEach(async function () {
        await driver.quit();
    });

    it("checks the files behind Basic Auth", async function () {
        await driver.get("https://admin:admin@the-internet.herokuapp.com/download_secure");
        const link = await driver.findElement(By.css(".example a")).getDomAttribute("href");

        const credentials = Buffer.from("admin:admin").toString("base64");
        const response = await fetch(`${BASE_URL}/${link}`, {
            method: "HEAD",
            headers: {Authorization: `Basic ${credentials}`},
        });
        assert.strictEqual(response.status, 200, link);
    });

    it("checks a page behind a form login", async function () {
        await driver.get(`${BASE_URL}/login`);
        await driver.findElement(By.id("username")).sendKeys("tomsmith");
        await driver.findElement(By.id("password")).sendKeys("SuperSecretPassword!");
        await driver.findElement(By.css("#login button")).click();
        const successMessage = await driver.wait(until.elementLocated(By.css(".flash.success")), 10000);
        await driver.wait(until.elementIsVisible(successMessage), 10000);

        const cookie = await driver.manage().getCookie("rack.session");
        let response = await fetch(`${BASE_URL}/secure`, {
            headers: {Cookie: `${cookie.name}=${cookie.value}`},
            redirect: "manual",
        });
        assert.strictEqual(response.status, 200);

        response = await fetch(`${BASE_URL}/secure`, {redirect: "manual"});
        assert.strictEqual(response.status, 302);
    });
});
