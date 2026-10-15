const {until} = require("selenium-webdriver");

const BASE_URL = "https://the-internet.herokuapp.com";

class BasePage {
    constructor(driver) {
        this.driver = driver;
    }

    async visit(path = "/") {
        await this.driver.get(BASE_URL + path);
    }

    async find(locator) {
        return this.driver.findElement(locator);
    }

    async click(locator) {
        await (await this.find(locator)).click();
    }

    async type(locator, text) {
        const element = await this.find(locator);
        await element.clear();
        await element.sendKeys(text);
    }

    async isDisplayed(locator) {
        try {
            return await (await this.find(locator)).isDisplayed();
        } catch (error) {
            return false;
        }
    }

    async textOf(locator) {
        return (await this.find(locator)).getText();
    }

    async title() {
        return this.driver.getTitle();
    }

    async waitFor(locator, timeout = 10000) {
        const element = await this.driver.wait(until.elementLocated(locator), timeout);
        await this.driver.wait(until.elementIsVisible(element), timeout);
    }
}

module.exports = BasePage;
