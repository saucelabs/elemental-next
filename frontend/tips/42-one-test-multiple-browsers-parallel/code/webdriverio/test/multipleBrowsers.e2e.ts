import {browser, expect} from '@wdio/globals';

describe('One test on multiple browsers, in parallel', () => {
    it('loads the page', async () => {
        await browser.url('https://the-internet.herokuapp.com');
        await expect(browser).toHaveTitle('The Internet');
    });
});
