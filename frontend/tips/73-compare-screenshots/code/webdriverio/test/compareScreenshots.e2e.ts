import {browser, $, expect} from '@wdio/globals';
import {PNG} from 'pngjs';

const URL = 'https://the-internet.herokuapp.com/visual_diff';

async function cardScreenshot(url: string) {
    await browser.url(url);
    const card = await $('#card');
    const png = await browser.takeElementScreenshot(card.elementId);
    return PNG.sync.read(Buffer.from(png, 'base64'));
}

function differentPixels(image: PNG, other: PNG) {
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

describe('Compare screenshots', () => {
    it('the same card has no differences', async () => {
        const baseline = await cardScreenshot(URL);

        expect(differentPixels(baseline, await cardScreenshot(URL))).toBe(0);
    });

    it('a moved button is noticed', async () => {
        const baseline = await cardScreenshot(URL);

        expect(differentPixels(baseline, await cardScreenshot(`${URL}?shift=10`))).toBeGreaterThan(0);
    });
});
