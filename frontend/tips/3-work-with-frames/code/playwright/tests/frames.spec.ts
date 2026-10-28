import {test, expect} from '@playwright/test';

test('nested frames', async ({page}) => {
    await page.goto('https://the-internet.herokuapp.com/nested_frames');

    const middleFrame = page.frameLocator('frame[name="frame-top"]').frameLocator('frame[name="frame-middle"]');

    await expect(middleFrame.locator('#content')).toHaveText('MIDDLE');
});

test('iframe', async ({page}) => {
    await page.goto('https://the-internet.herokuapp.com/tinymce');

    const editor = page.frameLocator('#mce_0_ifr').locator('#tinymce');
    await editor.fill('Hello World!');

    await expect(editor).toHaveText('Hello World!');
    await expect(page.locator('h3')).toHaveText('An iFrame containing the TinyMCE WYSIWYG Editor');
});
