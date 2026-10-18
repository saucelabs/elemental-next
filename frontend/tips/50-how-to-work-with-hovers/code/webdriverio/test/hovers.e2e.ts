import {browser, $$, expect} from '@wdio/globals';

describe('Hovers', () => {
    it('displays the caption on hover', async () => {
        await browser.url('https://the-internet.herokuapp.com/hovers');
        const anAvatar = $$('.figure')[0];
        const caption = anAvatar.$('.figcaption');
        await expect(caption).not.toBeDisplayed();

        await anAvatar.moveTo();
        await expect(caption).toBeDisplayed();
    });
});
