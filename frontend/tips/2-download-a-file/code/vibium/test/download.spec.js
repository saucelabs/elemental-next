const assert = require('assert');
const fs = require('fs');
const path = require('path');
const {browser} = require('vibium');

describe('Download Test', function () {
    let bro;
    let page;
    const tmpDir = path.join(__dirname, 'tmp');

    beforeEach(async function () {
        fs.mkdirSync(tmpDir, {recursive: true});
        bro = await browser.start();
        page = await bro.page();
    });

    afterEach(async function () {
        await bro.stop();
        fs.rmSync(tmpDir, {recursive: true, force: true});
    });

    it('download a file', async function () {
        await page.go('https://the-internet.herokuapp.com/download');

        const downloadStarted = new Promise((resolve) => page.onDownload(resolve));
        await page.find('.example a').click();
        const download = await downloadStarted;

        const filePath = path.join(tmpDir, download.suggestedFilename());
        await download.saveAs(filePath);

        assert(fs.statSync(filePath).size > 0);
    });
});
