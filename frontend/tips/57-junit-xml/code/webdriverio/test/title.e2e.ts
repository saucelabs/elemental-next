import {browser, expect} from '@wdio/globals';

describe('The Internet', () => {
    it('has the right title', async () => {
        await browser.url('https://the-internet.herokuapp.com');
        await expect(browser).toHaveTitle('The Internet');
    });
});
