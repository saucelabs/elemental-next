const assert = require('assert');
const {browser} = require('vibium');

describe('Locator Strategy', function () {
    let bro;
    let page;

    beforeEach(async function () {
        bro = await browser.start();
        page = await bro.page();
    });

    afterEach(async function () {
        await bro.stop();
    });

    it('finds the first link on the page', async function () {
        await page.go('https://the-internet.herokuapp.com/download');
        const link = await page.find('a').attr('href');
        console.log(link);
        assert(link.includes('github.com'));
    });

    it('finds the first link in the content', async function () {
        await page.go('https://the-internet.herokuapp.com/download');
        const link = await page.find('#content a').attr('href');
        console.log(link);
        assert(link.includes('download/'));
    });

    it('finds the first link in the example', async function () {
        await page.go('https://the-internet.herokuapp.com/download');
        const link = await page.find('#content .example a').attr('href');
        console.log(link);
        assert(link.includes('download/'));
    });
});
