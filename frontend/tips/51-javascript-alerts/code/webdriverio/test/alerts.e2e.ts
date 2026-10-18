import {browser, $, expect} from '@wdio/globals';

describe('JavaScript Alerts', () => {
    beforeEach(async () => {
        await browser.url('https://the-internet.herokuapp.com/javascript_alerts');
    });

    it('accepts the confirmation', async () => {
        browser.once('dialog', (dialog) => dialog.accept());
        await $('button=Click for JS Confirm').click();

        await expect($('#result')).toHaveText('You clicked: Ok');
    });

    it('dismisses the confirmation', async () => {
        browser.once('dialog', (dialog) => dialog.dismiss());
        await $('button=Click for JS Confirm').click();

        await expect($('#result')).toHaveText('You clicked: Cancel');
    });
});
