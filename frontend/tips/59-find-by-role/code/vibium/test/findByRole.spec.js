const assert = require('assert');
const {browser} = require('vibium');

describe('Find by role', function () {
    let bro;
    let page;

    beforeEach(async function () {
        bro = await browser.start();
        page = await bro.page();
    });

    afterEach(async function () {
        await bro.stop();
    });

    it('picks a fruit', async function () {
        await page.go('https://the-internet.herokuapp.com/custom_dropdown');

        await page.find({role: 'combobox', label: 'Fruit'}).click();
        await page.find({role: 'option', text: 'Mango'}).click();

        assert.equal(await page.find({role: 'combobox', label: 'Fruit'}).text(), 'Mango');
        assert.equal(await page.find('#result').text(), 'Selected: mango');
    });
});
