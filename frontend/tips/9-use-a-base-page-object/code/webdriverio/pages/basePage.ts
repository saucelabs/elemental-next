import {browser, expect} from '@wdio/globals';

const BASE_URL = 'https://the-internet.herokuapp.com';

export default class BasePage {
    async visit(path = '/') {
        await browser.url(BASE_URL + path);
        await expect(browser).toHaveTitle('The Internet');
    }
}
