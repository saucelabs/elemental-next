const assert = require('assert');
const {browser} = require('vibium');

const HIGHLIGHT_STYLE = 'border: 2px solid red; border-style: dashed;';

async function highlight(page, selector, duration = 3) {
    const element = `document.querySelector('${selector}')`;
    // store the original style so it can be reset later
    const originalStyle = (await page.find(selector).attr('style')) || '';
    // style the element with a red dashed border
    await page.evaluate(`${element}.setAttribute('style', '${HIGHLIGHT_STYLE}')`);
    // keep the element highlighted for a spell and then revert
    if (duration > 0) {
        await page.wait(duration * 1000);
        await page.evaluate(`${element}.setAttribute('style', '${originalStyle}')`);
    }
}

describe('Highlight Elements', function () {
    let bro;
    let page;

    beforeEach(async function () {
        bro = await browser.start();
        page = await bro.page();
        await page.go('https://the-internet.herokuapp.com/large');
    });

    afterEach(async function () {
        await bro.stop();
    });

    it('highlights an element', async function () {
        await highlight(page, '[id="sibling-2.3"]', 0);
        assert((await page.find('[id="sibling-2.3"]').attr('style')).includes('dashed'));
    });

    it('reverts the style afterward', async function () {
        await highlight(page, '[id="sibling-2.3"]', 1);
        assert(!((await page.find('[id="sibling-2.3"]').attr('style')) || '').includes('dashed'));
    });
});
