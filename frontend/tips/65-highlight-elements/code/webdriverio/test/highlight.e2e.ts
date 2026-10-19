import {browser, $, expect} from '@wdio/globals';

const HIGHLIGHT_STYLE = 'border: 2px solid red; border-style: dashed;';

async function highlight(element: WebdriverIO.Element, duration = 3) {
    // store the original style so it can be reset later
    const originalStyle = (await element.getAttribute('style')) || '';
    // style the element with a red dashed border
    await browser.execute((el, style) => el.setAttribute('style', style), element, HIGHLIGHT_STYLE);
    // keep the element highlighted for a spell and then revert
    if (duration > 0) {
        await browser.pause(duration * 1000);
        await browser.execute((el, style) => el.setAttribute('style', style), element, originalStyle);
    }
}

describe('Highlight Elements', () => {
    beforeEach(async () => {
        await browser.url('https://the-internet.herokuapp.com/large');
    });

    it('highlights an element', async () => {
        const element = await $('[id="sibling-2.3"]');
        await highlight(element, 0);
        await expect(element).toHaveAttribute('style', expect.stringContaining('dashed'));
    });

    it('reverts the style afterward', async () => {
        const element = await $('[id="sibling-2.3"]');
        await highlight(element, 1);
        expect(await element.getAttribute('style') || '').not.toContain('dashed');
    });
});
