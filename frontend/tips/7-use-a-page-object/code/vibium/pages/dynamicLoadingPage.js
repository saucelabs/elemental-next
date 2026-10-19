const assert = require('assert');

const URL = 'https://the-internet.herokuapp.com/dynamic_loading/2';
const START_BUTTON = '#start button';
const FINISH_TEXT = '#finish';

class DynamicLoadingPage {
    constructor(page) {
        this.page = page;
    }

    async visit() {
        await this.page.go(URL);
        assert.strictEqual(await this.page.title(), 'The Internet');
    }

    async start() {
        await this.page.find(START_BUTTON).click();
    }

    async waitForFinish(timeout = 10000) {
        await this.page.find(FINISH_TEXT).waitUntil('visible', {timeout});
    }

    async finishText() {
        return this.page.find(FINISH_TEXT).text();
    }
}

module.exports = DynamicLoadingPage;
