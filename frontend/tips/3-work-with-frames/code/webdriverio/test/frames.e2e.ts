import {browser, expect} from '@wdio/globals';

describe('Frame Test', () => {
    it('nested frames', async () => {
        const page = await browser.url('https://the-internet.herokuapp.com/nested_frames');

        const topFrame = await page.frame({selector: 'frame[name="frame-top"]'});
        const middleFrame = await topFrame.frame({selector: 'frame[name="frame-middle"]'});

        await expect(middleFrame.$('#content')).toHaveText('MIDDLE');
    });

    it('iframe', async () => {
        const page = await browser.url('https://the-internet.herokuapp.com/tinymce');

        const editorFrame = await page.frame({selector: '#mce_0_ifr'});
        const editor = editorFrame.$('#tinymce');
        const beforeText = await editor.getText();
        await editor.setValue('Hello World!');
        await expect(editor).not.toHaveText(beforeText);

        await expect(page.$('h3')).toHaveText('An iFrame containing the TinyMCE WYSIWYG Editor');
    });
});
