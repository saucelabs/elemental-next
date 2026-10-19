const assert = require('assert');
const {browser} = require('vibium');

describe('Download a File Revisited', function () {
    let bro;
    let page;

    beforeEach(async function () {
        bro = await browser.start();
        page = await bro.page();
    });

    afterEach(async function () {
        await bro.stop();
    });

    it('file can be downloaded', async function () {
        await page.go('https://the-internet.herokuapp.com/download');
        const link = new URL(await page.find('.example a').attr('href'), await page.url()).toString();

        const response = await fetch(link, {method: 'HEAD'});
        const contentDisposition = response.headers.get('content-disposition');
        const contentLength = Number(response.headers.get('content-length'));

        assert(contentDisposition.startsWith('attachment'));
        assert(contentLength > 0);
    });
});
