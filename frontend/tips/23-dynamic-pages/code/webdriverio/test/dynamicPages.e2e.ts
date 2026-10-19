import {browser, $, expect} from '@wdio/globals';

describe('Dynamic Pages', () => {
    for (const [example, description] of [['1', 'a hidden element'], ['2', 'an element rendered after']]) {
        it(`waits for ${description}`, async () => {
            await browser.url(`https://the-internet.herokuapp.com/dynamic_loading/${example}`);
            await $('#start button').click();

            await expect($('#finish')).toBeDisplayed({wait: 10000});
        });
    }
});
