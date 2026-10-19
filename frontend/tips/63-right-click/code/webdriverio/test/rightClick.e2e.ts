import {browser, $, expect} from '@wdio/globals';

describe('Right Click', () => {
    it('opens the context menu', async () => {
        await browser.url('https://the-internet.herokuapp.com/context_menu');

        const alertText = new Promise<string>((resolve) => {
            browser.once('dialog', async (dialog) => {
                resolve(dialog.message());
                await dialog.accept();
            });
        });
        await $('#hot-spot').click({button: 'right'});

        expect(await alertText).toBe('You selected a context menu');
    });
});
