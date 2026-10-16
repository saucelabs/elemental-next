const assert = require("assert");
const {By} = require("selenium-webdriver");
const BasePage = require("./basePage");

const START_BUTTON = By.css("#start button");
const FINISH_TEXT = By.id("finish");

class DynamicLoadingPage extends BasePage {
    async load() {
        await this.visit("/dynamic_loading/2");
        assert.strictEqual(await this.title(), "The Internet");
    }

    async start() {
        await this.click(START_BUTTON);
    }

    async finishText() {
        await this.waitFor(FINISH_TEXT);
        return this.textOf(FINISH_TEXT);
    }
}

module.exports = DynamicLoadingPage;
