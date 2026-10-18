import {browser, $, expect} from '@wdio/globals';

describe('Screenshot', () => {
    it('fails on purpose', async () => {
        await browser.url('https://the-internet.herokuapp.com');

        await expect($('h1')).toHaveText('blah blah blah', {wait: 2000});
    });
});
