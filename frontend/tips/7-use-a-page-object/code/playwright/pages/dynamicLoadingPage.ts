import {expect, type Locator, type Page} from '@playwright/test';

export class DynamicLoadingPage {
    readonly page: Page;
    readonly startButton: Locator;
    readonly finishText: Locator;

    constructor(page: Page) {
        this.page = page;
        this.startButton = page.locator('#start button');
        this.finishText = page.locator('#finish');
    }

    async visit() {
        await this.page.goto('https://the-internet.herokuapp.com/dynamic_loading/2');
        await expect(this.page).toHaveTitle('The Internet');
    }

    async start() {
        await this.startButton.click();
    }
}
