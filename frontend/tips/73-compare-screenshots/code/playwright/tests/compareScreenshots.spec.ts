import {test, expect, Page} from '@playwright/test';
import {PNG} from 'pngjs';

const URL = 'https://the-internet.herokuapp.com/visual_diff';

async function cardScreenshot(page: Page, url: string) {
    await page.goto(url);
    return PNG.sync.read(await page.locator('#card').screenshot());
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

test('the same card has no differences', async ({page}) => {
    const baseline = await cardScreenshot(page, URL);

    expect(differentPixels(baseline, await cardScreenshot(page, URL))).toBe(0);
});

test('a moved button is noticed', async ({page}) => {
    const baseline = await cardScreenshot(page, URL);

    expect(differentPixels(baseline, await cardScreenshot(page, `${URL}?shift=10`))).toBeGreaterThan(0);
});
