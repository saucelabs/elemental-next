const assert = require('assert');
const {browser} = require('vibium');

describe('Dynamic Pages', function () {
    let bro;
    let page;

    beforeEach(async function () {
        bro = await browser.start();
        page = await bro.page();
    });

    afterEach(async function () {
        await bro.stop();
    });

    for (const [example, description] of [['1', 'a hidden element'], ['2', 'an element rendered after']]) {
        it(`waits for ${description}`, async function () {
            await page.go(`https://the-internet.herokuapp.com/dynamic_loading/${example}`);
            await page.find('#start button').click();

            await page.find('#finish').waitUntil('visible', {timeout: 10000});
            assert(await page.find('#finish').isVisible());
        });
    }
});
