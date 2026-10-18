import {browser, expect} from '@wdio/globals';

describe('One test on multiple browsers', () => {
    before(function () {
        if (!process.env.SAUCE_USERNAME || !process.env.SAUCE_ACCESS_KEY) {
            console.log('Set SAUCE_USERNAME and SAUCE_ACCESS_KEY to run this test on Sauce Labs');
            this.skip();
        }
    });

    it('loads the page', async () => {
        await browser.url('https://the-internet.herokuapp.com');
        await expect(browser).toHaveTitle('The Internet');
    });
});
