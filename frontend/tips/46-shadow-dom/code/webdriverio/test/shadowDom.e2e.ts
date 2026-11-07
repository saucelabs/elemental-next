import {browser, $, expect} from '@wdio/globals';

describe('Shadow DOM', () => {
    beforeEach(async () => {
        await browser.url('https://the-internet.herokuapp.com/shadowdom_advanced');
    });

    it('clicks a button inside nested shadow roots', async () => {
        await $('#inner-button').click();

        await expect($('#nested-result')).toHaveText('You clicked the button in the inner shadow root');
    });

    it('step by step, with shadow$', async () => {
        await $('#outer-card').shadow$('#inner-card').shadow$('#inner-button').click();

        await expect($('#nested-result')).toHaveText('You clicked the button in the inner shadow root');
    });
});
