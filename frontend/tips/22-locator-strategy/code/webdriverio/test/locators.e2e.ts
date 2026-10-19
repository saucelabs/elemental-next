import {browser, $$, expect} from '@wdio/globals';

describe('Locator Strategy', () => {
    beforeEach(async () => {
        await browser.url('https://the-internet.herokuapp.com/download');
    });

    it('finds the first link on the page', async () => {
        const link = await $$('a')[0].getAttribute('href');
        console.log(link);
        expect(link).toContain('github.com');
    });

    it('finds the first link in the content', async () => {
        const link = await $$('#content a')[0].getAttribute('href');
        console.log(link);
        expect(link).toContain('download/');
    });

    it('finds the first link in the example', async () => {
        const link = await $$('#content .example a')[0].getAttribute('href');
        console.log(link);
        expect(link).toContain('download/');
    });
});
