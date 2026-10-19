import {browser, expect} from '@wdio/globals';

describe('Cloud', () => {
    it('loads the page', async () => {
        await browser.url('https://the-internet.herokuapp.com');
        await expect(browser).toHaveTitle(expect.stringContaining('The Internet'));
    });
});
