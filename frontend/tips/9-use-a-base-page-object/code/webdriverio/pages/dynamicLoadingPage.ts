import {$} from '@wdio/globals';
import BasePage from './basePage.js';

class DynamicLoadingPage extends BasePage {
    get startButton() {
        return $('#start button');
    }

    get finishText() {
        return $('#finish');
    }

    async load() {
        await this.visit('/dynamic_loading/2');
    }

    async start() {
        await this.startButton.click();
    }
}

export default new DynamicLoadingPage();
