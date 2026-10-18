import {browser, expect} from '@wdio/globals';

describe('Multiple Windows', () => {
    it('work with a new window', async () => {
        const page = await browser.url('https://the-internet.herokuapp.com/windows');
        await page.$('.example a').click();

        const newWindow = await browser.waitUntil(async () =>
            (await browser.browsingContexts()).find((context) => context.url.endsWith('/windows/new')));

        expect(await page.getTitle()).toBe('The Internet');
        await expect(newWindow.$('h3')).toHaveText('New Window');
    });
});
