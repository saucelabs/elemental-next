import {BasePage} from './basePage';

export class DynamicLoadingPage extends BasePage {
    readonly startButton = this.page.locator('#start button');
    readonly finishText = this.page.locator('#finish');

    async load() {
        await this.visit('/dynamic_loading/2');
    }

    async start() {
        await this.startButton.click();
    }
}
