import {expect, type Page} from '@playwright/test';

const BASE_URL = 'https://the-internet.herokuapp.com';

export class BasePage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async visit(path = '/') {
        await this.page.goto(BASE_URL + path);
        await expect(this.page).toHaveTitle('The Internet');
    }
}
