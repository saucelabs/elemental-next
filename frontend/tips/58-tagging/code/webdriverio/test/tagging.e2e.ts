import {browser, expect} from '@wdio/globals';

describe('The Internet', () => {
    it('has the right title @smoke', async () => {
        await browser.url('https://the-internet.herokuapp.com');
        await expect(browser).toHaveTitle('The Internet');
    });

    // This test is not finished yet, so it fails. Since it's tagged as @wip, it doesn't run with `--mochaOpts.grep @smoke`.
    it('is a work in progress @wip', async () => {
        await browser.url('https://the-internet.herokuapp.com');
        await expect(browser).toHaveTitle('Not finished yet');
    });
});
