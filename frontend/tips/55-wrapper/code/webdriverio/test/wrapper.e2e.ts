import {browser, $, expect} from '@wdio/globals';
import {addLogging, messages} from '../logging.ts';

describe('Wrapper', () => {
    before(() => {
        addLogging();
    });

    it('logs every action', async () => {
        await browser.url('https://the-internet.herokuapp.com');
        await $('=Checkboxes').click();

        expect(messages).toEqual([
            'Navigated to https://the-internet.herokuapp.com',
            'Clicking on Checkboxes',
            'URL changed to https://the-internet.herokuapp.com/checkboxes',
        ]);
    });
});
