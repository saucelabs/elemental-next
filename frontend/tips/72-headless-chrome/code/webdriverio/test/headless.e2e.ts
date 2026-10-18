import {browser, expect} from '@wdio/globals';

describe('Headless Chrome', () => {
    it('loads the page', async () => {
        await browser.url('https://the-internet.herokuapp.com');
        await expect(browser).toHaveTitle('The Internet');

        const userAgent = await browser.execute(() => navigator.userAgent);
        console.log(userAgent);
        expect(userAgent).toContain('HeadlessChrome');
    });
});
