import {browser, $, expect} from '@wdio/globals';

describe('HTML5 Drag and Drop', () => {
    it('swaps the columns', async () => {
        await browser.url('https://the-internet.herokuapp.com/drag_and_drop');

        await $('#column-a').dragAndDrop($('#column-b'));

        await expect($('#column-a')).toHaveText('B');
        await expect($('#column-b')).toHaveText('A');
    });
});
