const assert = require('assert');
const {browser} = require('vibium');

describe('Frame Test', function () {
    let bro;
    let page;

    beforeEach(async function () {
        bro = await browser.start();
        page = await bro.page();
    });

    afterEach(async function () {
        await bro.stop();
    });

    it('nested frames', async function () {
        await page.go('https://the-internet.herokuapp.com/nested_frames');

        const topFrame = await page.frame('frame-top');
        const middleFrame = await topFrame.frame('frame-middle');

        assert.equal(await middleFrame.find('#content').text(), 'MIDDLE');
    });

    it('iframe', async function () {
        await page.go('https://the-internet.herokuapp.com/tinymce');

        // The editor's iframe has no name and no URL, so we wait for it and take the only frame of the page
        await page.find('#mce_0_ifr');
        const [editorFrame] = await page.frames();
        const editor = editorFrame.find('#tinymce');
        const beforeText = await editor.text();
        await editor.clear();
        await editor.type('Hello World!');
        assert.notEqual(await editor.text(), beforeText);

        assert.equal(await page.find('h3').text(), 'An iFrame containing the TinyMCE WYSIWYG Editor');
    });
});
