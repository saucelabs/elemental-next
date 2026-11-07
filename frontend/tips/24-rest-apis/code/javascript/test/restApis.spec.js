const assert = require("assert");
const crypto = require("crypto");
const {Builder, By, until} = require("selenium-webdriver");

const BASE_URL = "https://the-internet.herokuapp.com";
const PASSWORD = "SuperSecret123";

function post(path, username) {
    return fetch(`${BASE_URL}${path}`, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({username, password: PASSWORD}),
    });
}

describe("Test setup with a REST API", function () {
    let driver;
    let user;

    beforeEach(async function () {
        // A unique name, so tests that run at the same time don't share a user
        user = `user-${crypto.randomUUID().slice(0, 12)}`;
        const response = await post("/api/users", user);
        assert.strictEqual(response.status, 201);
        driver = await new Builder().forBrowser("chrome").build();
    });

    afterEach(async function () {
        if (driver) {
            await driver.quit();
        }
        await fetch(`${BASE_URL}/api/users/${user}`, {method: "DELETE"});
    });

    async function loggedInUser() {
        const span = await driver.wait(until.elementLocated(By.css("span#username")), 5000);
        await driver.wait(until.elementIsVisible(span), 5000);
        return span.getText();
    }

    it("logs in with a new user", async function () {
        await driver.get(`${BASE_URL}/login`);
        await driver.findElement(By.id("username")).sendKeys(user);
        await driver.findElement(By.id("password")).sendKeys(PASSWORD);
        await driver.findElement(By.css("button[type='submit']")).click();
        assert.strictEqual(await loggedInUser(), user);
    });

    it("skips the login form", async function () {
        const response = await post("/api/sessions", user);
        assert.strictEqual(response.status, 200);
        // The cookie header looks like "rack.session=<value>; path=/; ...", so we keep the value
        const cookie = response.headers.get("set-cookie").split(";")[0];
        const value = cookie.slice(cookie.indexOf("=") + 1);
        // The browser accepts cookies only for the site it shows, so we open a page of the site first
        await driver.get(`${BASE_URL}/login`);
        await driver.manage().addCookie({name: "rack.session", value});
        await driver.get(`${BASE_URL}/secure`);
        assert.strictEqual(await loggedInUser(), user);
    });
});
