const assert = require('assert');
const fs = require('fs');
const {browser} = require('vibium');

describe('Screenshot', function () {
    let bro;
    let page;

    beforeEach(async function () {
        bro = await browser.start();
        page = await bro.page();
    });

    afterEach(async function () {
        if (this.currentTest.state === 'failed') {
            const testName = this.currentTest.fullTitle().replace(/\s/g, '-');
            fs.writeFileSync(`failshot_${testName}.png`, await page.screenshot());
        }
        await bro.stop();
    });

    it('fails on purpose', async function () {
        await page.go('https://the-internet.herokuapp.com');
        const heading = await page.find('h1').text();
        assert.strictEqual(heading, 'blah blah blah');
    });
});
