import {browser, $, expect} from '@wdio/globals';

class DynamicLoadingPage {
    get startButton() {
        return $('#start button');
    }

    get finishText() {
        return $('#finish');
    }

    async visit() {
        await browser.url('https://the-internet.herokuapp.com/dynamic_loading/2');
        await expect(browser).toHaveTitle('The Internet');
    }

    async start() {
        await this.startButton.click();
    }

    async waitForFinish(timeout = 10000) {
        await this.finishText.waitForDisplayed({timeout});
    }
}

export default new DynamicLoadingPage();
