const assert = require('assert');
const {PNG} = require('pngjs');
const {browser} = require('vibium');

const URL = 'https://the-internet.herokuapp.com/visual_diff';

describe('Compare screenshots', function () {
    let bro;
    let page;

    beforeEach(async function () {
        bro = await browser.start();
        page = await bro.page();
    });

    afterEach(async function () {
        await bro.stop();
    });

    async function cardScreenshot(url) {
        await page.go(url);
        return PNG.sync.read(await page.find('#card').screenshot());
    }

    function differentPixels(image, other) {
        // Images of different sizes differ everywhere
        if (image.width !== other.width || image.height !== other.height) {
            return image.width * image.height;
        }
        let different = 0;
        // Each pixel takes 4 bytes: red, green, blue and alpha
        for (let i = 0; i < image.data.length; i += 4) {
            if (image.data.readUInt32BE(i) !== other.data.readUInt32BE(i)) {
                different++;
            }
        }
        return different;
    }

    it('the same card has no differences', async function () {
        const baseline = await cardScreenshot(URL);

        assert.equal(differentPixels(baseline, await cardScreenshot(URL)), 0);
    });

    it('a moved button is noticed', async function () {
        const baseline = await cardScreenshot(URL);

        assert.ok(differentPixels(baseline, await cardScreenshot(`${URL}?shift=10`)) > 0);
    });
});
