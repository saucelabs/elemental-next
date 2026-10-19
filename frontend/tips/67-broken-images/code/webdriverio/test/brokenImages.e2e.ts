import {browser, $$, expect} from '@wdio/globals';

describe('Broken Images', () => {
    beforeEach(async () => {
        await browser.url('https://the-internet.herokuapp.com/broken_images');
    });

    it('finds them with an HTTP library', async () => {
        const sources = await $$('img').map((image) => image.getProperty('src') as Promise<string>);
        const brokenImages = [];
        for (const source of sources) {
            const response = await fetch(source);
            if (response.status !== 200) {
                brokenImages.push(source);
            }
        }
        console.log(brokenImages);
        expect(brokenImages.map((source) => source.split('/').pop())).toEqual(['asdf.jpg', 'hjkl.jpg']);
    });

    it('finds them with JavaScript', async () => {
        const sources = [];
        for (const image of await $$('img')) {
            const loaded = await browser.execute((img) => img.complete && img.naturalWidth > 0, image);
            if (!loaded) {
                sources.push(await image.getAttribute('src'));
            }
        }
        console.log(sources);
        expect(sources).toEqual(['asdf.jpg', 'hjkl.jpg']);
    });
});
