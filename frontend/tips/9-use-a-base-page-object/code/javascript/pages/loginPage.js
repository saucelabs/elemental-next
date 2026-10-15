const assert = require("assert");
const {By} = require("selenium-webdriver");
const BasePage = require("./basePage");

const USERNAME_INPUT = By.id("username");
const PASSWORD_INPUT = By.id("password");
const SUBMIT_BUTTON = By.css("#login button");
const SUCCESS_MESSAGE = By.css(".flash.success");

class LoginPage extends BasePage {
    async load() {
        await this.visit("/login");
        assert.strictEqual(await this.title(), "The Internet");
    }

    async loginAs(username, password) {
        await this.type(USERNAME_INPUT, username);
        await this.type(PASSWORD_INPUT, password);
        await this.click(SUBMIT_BUTTON);
    }

    async successMessagePresent() {
        await this.waitFor(SUCCESS_MESSAGE);
        return this.isDisplayed(SUCCESS_MESSAGE);
    }
}

module.exports = LoginPage;
