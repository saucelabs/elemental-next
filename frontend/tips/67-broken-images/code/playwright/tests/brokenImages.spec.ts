import {test, expect} from '@playwright/test';

test.beforeEach(async ({page}) => {
    await page.goto('https://the-internet.herokuapp.com/broken_images');
});

test('finds them with an HTTP request', async ({page}) => {
    const sources = await page.locator('img').evaluateAll(
        (images) => images.map((image) => (image as HTMLImageElement).src));
    const brokenImages = [];
    for (const source of sources) {
        const response = await page.request.get(source);
        if (response.status() !== 200) {
            brokenImages.push(source);
        }
    }
    console.log(brokenImages);
    expect(brokenImages.map((source) => source.split('/').pop())).toEqual(['asdf.jpg', 'hjkl.jpg']);
});

test('finds them with JavaScript', async ({page}) => {
    const sources = await page.locator('img').evaluateAll((images) => (images as HTMLImageElement[])
        .filter((image) => !(image.complete && image.naturalWidth > 0))
        .map((image) => image.getAttribute('src')));
    console.log(sources);
    expect(sources).toEqual(['asdf.jpg', 'hjkl.jpg']);
});
