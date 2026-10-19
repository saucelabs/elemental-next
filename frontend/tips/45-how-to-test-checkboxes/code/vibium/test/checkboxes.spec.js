const assert = require('assert');
const {browser} = require('vibium');

describe('Checkboxes', function () {
    let bro;
    let page;

    beforeEach(async function () {
        bro = await browser.start();
        page = await bro.page();
        await page.go('https://the-internet.herokuapp.com/checkboxes');
    });

    afterEach(async function () {
        await bro.stop();
    });

    it('looks up the checked attribute', async function () {
        const checkboxes = await page.findAll('input[type="checkbox"]');
        console.log(await Promise.all(checkboxes.map((checkbox) => checkbox.attr('checked'))));
        assert.strictEqual(await checkboxes[0].attr('checked'), null);
        assert.notStrictEqual(await checkboxes[checkboxes.length - 1].attr('checked'), null);
    });

    it('checks if the checkbox is checked', async function () {
        const checkboxes = await page.findAll('input[type="checkbox"]');
        assert.strictEqual(await checkboxes[0].isChecked(), false);
        assert.strictEqual(await checkboxes[checkboxes.length - 1].isChecked(), true);
    });
});
