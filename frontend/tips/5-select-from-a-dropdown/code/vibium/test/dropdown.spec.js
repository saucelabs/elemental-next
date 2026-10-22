const assert = require('assert');
const {browser} = require('vibium');

describe('Dropdown Test', function () {
    let bro;
    let page;

    beforeEach(async function () {
        bro = await browser.start();
        page = await bro.page();
    });

    afterEach(async function () {
        await bro.stop();
    });

    it('select from a dropdown', async function () {
        await page.go('https://the-internet.herokuapp.com/dropdown');

        await page.find('#dropdown').selectOption('Option 1');

        assert.equal(await page.find('#dropdown option:checked').text(), 'Option 1');
    });
});
