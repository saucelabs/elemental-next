const assert = require('assert');
const {browser} = require('vibium');

describe('Open New Window', function () {
    let bro;
    let page;

    beforeEach(async function () {
        bro = await browser.start();
        page = await bro.page();
    });

    afterEach(async function () {
        await bro.stop();
    });

    it('opens new tab', async function () {
        await page.go('https://the-internet.herokuapp.com/windows');

        const newPage = await bro.newPage();
        await newPage.go('https://the-internet.herokuapp.com/typos');

        assert.equal((await bro.pages()).length, 2);
        assert.equal(await newPage.find('h3').text(), 'Typos');
    });
});
