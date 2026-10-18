import {browser, $, expect} from '@wdio/globals';

const BASE_URL = 'https://the-internet.herokuapp.com/dynamic_loading';

describe('Waiting', () => {
    for (const example of ['1', '2']) {
        it(`waits for the element to be displayed in example ${example}`, async () => {
            await browser.url(`${BASE_URL}/${example}`);
            await $('#start button').click();

            await $('#finish').waitForDisplayed({timeout: 10000});
            expect(await $('#finish').getText()).toBe('Hello World!');
        });
    }

    it('gives up when the wait is too short', async () => {
        await browser.url(`${BASE_URL}/2`);
        await $('#start button').click();

        await expect($('#finish').waitForDisplayed({timeout: 2000})).rejects.toThrow();
    });

    it('waits inside the assertion', async () => {
        await browser.url(`${BASE_URL}/1`);
        await $('#start button').click();

        await expect($('#finish')).toHaveText('Hello World!', {wait: 10000});
    });
});
