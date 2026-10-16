const assert = require("assert");
const fs = require("fs");
const path = require("path");
const {Builder, By, until} = require("selenium-webdriver");

function userData() {
    const [header, ...rows] = fs.readFileSync(path.join(__dirname, "..", "user_data.csv"), "utf8")
        .trim()
        .split(/\r?\n/)
        .map((line) => line.split(","));
    return rows.map((row) => Object.fromEntries(header.map((key, index) => [key, row[index]])));
}

describe("Data-driven login", function () {
    let driver;

    beforeEach(async function () {
        driver = await new Builder().forBrowser("firefox").build();
    });

    afterEach(async function () {
        await driver.quit();
    });

    async function notificationText() {
        const flash = await driver.wait(until.elementLocated(By.id("flash")), 5000);
        await driver.wait(until.elementIsVisible(flash), 5000);
        return flash.getText();
    }

    for (const user of userData()) {
        it(`logs in as ${user.account_type}`, async function () {
            await driver.get("https://the-internet.herokuapp.com/login");
            await driver.findElement(By.id("username")).sendKeys(user.username);
            await driver.findElement(By.id("password")).sendKeys(user.password);
            await driver.findElement(By.css("#login button")).click();
            assert((await notificationText()).startsWith(user.notification_message));
        });
    }
});
