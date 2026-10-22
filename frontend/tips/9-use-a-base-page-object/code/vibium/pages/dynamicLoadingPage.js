const BasePage = require('./basePage');

const START_BUTTON = '#start button';
const FINISH_TEXT = '#finish';

class DynamicLoadingPage extends BasePage {
    async load() {
        await this.visit('/dynamic_loading/2');
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
