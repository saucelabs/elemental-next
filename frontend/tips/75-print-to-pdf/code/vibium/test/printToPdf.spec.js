const assert = require('assert');
const fs = require('fs');
const os = require('os');
const path = require('path');
const {browser} = require('vibium');

describe('Print to PDF', function () {
    let bro;
    let page;

    beforeEach(async function () {
        bro = await browser.start();
        page = await bro.page();
    });

    afterEach(async function () {
        await bro.stop();
    });

    it('prints the page to PDF', async function () {
        await page.go('https://the-internet.herokuapp.com/tables');

        const pdf = await page.pdf();

        // Every PDF file starts with %PDF-
        assert.equal(pdf.subarray(0, 5).toString(), '%PDF-');
        const file = path.join(fs.mkdtempSync(path.join(os.tmpdir(), 'pdf-')), 'tables.pdf');
        fs.writeFileSync(file, pdf);
        console.log(`Saved ${file}`);
    });
});
