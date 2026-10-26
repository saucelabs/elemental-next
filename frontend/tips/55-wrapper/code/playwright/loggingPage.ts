import type {Page} from '@playwright/test';

// Wraps a page, so that visiting a URL and clicking log what they do
export class LoggingPage {
    // The messages logged during the test, so the test can check them
    readonly messages: string[] = [];

    constructor(readonly page: Page) {
    }

    private log(message: string) {
        console.log(message);
        this.messages.push(message);
    }

    async goto(url: string) {
        await this.page.goto(url);
        this.log(`Navigated to ${url}`);
    }

    async click(selector: string) {
        const element = this.page.locator(selector);
        this.log(`Clicking on ${await element.textContent()}`);
        const preClickUrl = this.page.url();
        await element.click();
        await this.page.waitForLoadState();
        if (this.page.url() !== preClickUrl) {
            this.log(`URL changed to ${this.page.url()}`);
        }
    }
}
