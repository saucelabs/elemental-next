const assert = require("assert");
const {Builder, By, until} = require("selenium-webdriver");

describe("Growl", function () {
    let driver;

    beforeEach(async function () {
        driver = await new Builder().forBrowser("firefox").build();
    });

    afterEach(async function () {
        await driver.quit();
    });

    it("displays a notification", async function () {
        await driver.get("https://the-internet.herokuapp.com");

        // Step 1: check for jQuery on the page, add it if need be
        await driver.executeScript(`
            if (!window.jQuery) {
                var jquery = document.createElement('script');
                jquery.type = 'text/javascript';
                jquery.src = 'https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js';
                document.getElementsByTagName('head')[0].appendChild(jquery);
            }`);
        await driver.wait(() => driver.executeScript("return !!window.jQuery"), 10000);

        // Step 2: use jQuery to add jquery-growl to the page
        await driver.executeScript("$.getScript('https://the-internet.herokuapp.com/js/vendor/jquery.growl.js')");

        // Step 3: use jQuery to add jquery-growl styles to the page
        await driver.executeScript(
            "$('head').append('<link rel=\"stylesheet\" " +
            "href=\"https://the-internet.herokuapp.com/css/jquery.growl.css\" type=\"text/css\" />');");
        await driver.wait(() => driver.executeScript("return !!$.growl"), 10000);

        // Step 4: display a message with jquery-growl
        await driver.executeScript("$.growl({ title: 'GET', message: '/' });");

        const notification = await driver.wait(until.elementLocated(By.css("#growls .growl")), 10000);
        await driver.wait(until.elementIsVisible(notification), 10000);
        assert.strictEqual(await notification.findElement(By.className("growl-title")).getText(), "GET");
        assert.strictEqual(await notification.findElement(By.className("growl-message")).getText(), "/");
    });
});
