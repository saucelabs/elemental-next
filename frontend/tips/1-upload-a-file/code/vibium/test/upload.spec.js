const assert = require('assert');
const path = require('path');
const {browser} = require('vibium');

describe('Upload Test', function () {
    let bro;
    let page;

    beforeEach(async function () {
        bro = await browser.start();
        page = await bro.page();
    });

    afterEach(async function () {
        await bro.stop();
    });

    it('upload a file', async function () {
        const filename = 'some-file.txt';
        const filePath = path.join(process.cwd(), filename);

        await page.go('https://the-internet.herokuapp.com/upload');
        await page.find('#file-upload').setFiles([filePath]);
        await page.find('#file-submit').click();

        const text = await page.find('#uploaded-files').text();
        assert.equal(text, filename);
    });
});
