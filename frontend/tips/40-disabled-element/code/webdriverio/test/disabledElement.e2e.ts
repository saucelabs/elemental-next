import {browser, $, expect} from '@wdio/globals';

describe('Disabled Element', () => {
    it('finds the disabled option', async () => {
        await browser.url('https://the-internet.herokuapp.com/dropdown');

        await expect($('option=Please select an option')).toBeDisabled();
        await expect($('option=Option 1')).toBeEnabled();
    });
});
