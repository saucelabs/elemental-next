import {browser, $, expect} from '@wdio/globals';

describe('Find by role', () => {
    it('picks a fruit', async () => {
        await browser.url('https://the-internet.herokuapp.com/custom_dropdown');

        // aria/ finds an element by its accessible name
        await $('aria/Fruit').click();
        await $('aria/Mango').click();

        await expect($('aria/Fruit')).toHaveText('Mango');
        await expect($('#result')).toHaveText('Selected: mango');
    });
});
