const assert = require('assert');

const BASE_URL = 'https://the-internet.herokuapp.com';

class BasePage {
    constructor(page) {
        this.page = page;
    }

    async visit(path = '/') {
        await this.page.go(BASE_URL + path);
        assert.strictEqual(await this.page.title(), 'The Internet');
    }

    async click(selector) {
        await this.page.find({css: selector}).click();
    }

    async type(selector, text) {
        await this.page.find({css: selector}).fill(text);
    }

    async textOf(selector) {
        return this.page.find({css: selector}).text();
    }

    async isDisplayed(selector) {
        return this.page.find({css: selector}).isVisible();
    }

    async waitFor(selector, timeout = 10000) {
        await this.page.find({css: selector}).waitUntil('visible', {timeout});
    }
}

module.exports = BasePage;
