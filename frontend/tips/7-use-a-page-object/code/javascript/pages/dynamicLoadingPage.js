const assert = require("assert");
const {By, until} = require("selenium-webdriver");

const URL = "https://the-internet.herokuapp.com/dynamic_loading/2";
const START_BUTTON = By.css("#start button");
const FINISH_TEXT = By.id("finish");

class DynamicLoadingPage {
    constructor(driver) {
        this.driver = driver;
    }

    async visit() {
        await this.driver.get(URL);
        assert.strictEqual(await this.driver.getTitle(), "The Internet");
    }

    async start() {
        await this.driver.findElement(START_BUTTON).click();
    }

    async waitForFinish(timeout = 10000) {
        const finish = await this.driver.wait(until.elementLocated(FINISH_TEXT), timeout);
        await this.driver.wait(until.elementIsVisible(finish), timeout);
    }

    async finishText() {
        return this.driver.findElement(FINISH_TEXT).getText();
    }
}

module.exports = DynamicLoadingPage;
