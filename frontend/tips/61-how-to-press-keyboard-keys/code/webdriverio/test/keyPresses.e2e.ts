import {browser, $, expect} from '@wdio/globals';
import {Key} from 'webdriverio';

describe('Keyboard Keys', () => {
    beforeEach(async () => {
        await browser.url('https://the-internet.herokuapp.com/key_presses');
    });

    it('sends keys to an element', async () => {
        await $('#target').addValue(Key.Space);
        await expect($('#result')).toHaveText('You entered: SPACE');
    });

    it('sends keys without an element', async () => {
        await browser.keys(Key.Tab);
        await expect($('#result')).toHaveText('You entered: TAB');
    });
});
