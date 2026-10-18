import {browser, expect} from '@wdio/globals';

describe('Open New Window', () => {
    it('opens new window', async () => {
        await browser.url('https://the-internet.herokuapp.com/windows');

        const newWindow = await browser.newWindow('https://the-internet.herokuapp.com/typos',
            {type: 'window'}) as WebdriverIO.BrowsingContext;

        expect(await browser.browsingContexts()).toHaveLength(2);
        await expect(newWindow.$('h3')).toHaveText('Typos');
        await newWindow.closeWindow();
    });

    it('opens new tab', async () => {
        await browser.url('https://the-internet.herokuapp.com/windows');

        const newTab = await browser.newWindow('https://the-internet.herokuapp.com/typos',
            {type: 'tab'}) as WebdriverIO.BrowsingContext;

        expect(await browser.browsingContexts()).toHaveLength(2);
        await expect(newTab.$('h3')).toHaveText('Typos');
        await newTab.closeWindow();
    });
});
