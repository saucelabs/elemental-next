const assert = require('assert');
const {browser} = require('vibium');

describe('Broken Images', function () {
    let bro;
    let page;

    beforeEach(async function () {
        bro = await browser.start();
        page = await bro.page();
        await page.go('https://the-internet.herokuapp.com/broken_images');
    });

    afterEach(async function () {
        await bro.stop();
    });

    it('finds them with an HTTP library', async function () {
        const images = await page.findAll('img');
        const sources = await Promise.all(images.map(async (image) =>
            new URL(await image.attr('src'), await page.url()).toString()));
        const brokenImages = [];
        for (const source of sources) {
            const response = await fetch(source);
            if (response.status !== 200) {
                brokenImages.push(source);
            }
        }
        console.log(brokenImages);
        assert.deepStrictEqual(brokenImages.map((source) => source.split('/').pop()), ['asdf.jpg', 'hjkl.jpg']);
    });

    it('finds them with JavaScript', async function () {
        const sources = await page.evaluate(`
            Array.from(document.querySelectorAll('img'))
                .filter((img) => !(img.complete && img.naturalWidth > 0))
                .map((img) => img.getAttribute('src'))
        `);
        console.log(sources);
        assert.deepStrictEqual(sources, ['asdf.jpg', 'hjkl.jpg']);
    });
});
