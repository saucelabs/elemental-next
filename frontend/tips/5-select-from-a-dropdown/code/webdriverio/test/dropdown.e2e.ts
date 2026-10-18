import {browser, $, expect} from '@wdio/globals';

describe('Dropdown Test', () => {
    it('select from a dropdown', async () => {
        await browser.url('https://the-internet.herokuapp.com/dropdown');

        await $('#dropdown').selectByVisibleText('Option 1');

        await expect($('#dropdown option:checked')).toHaveText('Option 1');
    });
});
