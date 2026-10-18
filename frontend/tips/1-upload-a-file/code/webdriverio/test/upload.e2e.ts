import {browser, $, expect} from '@wdio/globals';
import path from 'path';

describe('Upload Test', () => {
    it('upload a file', async () => {
        const filename = 'some-file.txt';
        const filePath = path.join(process.cwd(), filename);

        await browser.url('https://the-internet.herokuapp.com/upload');
        await $('#file-upload').setValue(filePath);
        await $('#file-submit').click();

        await expect($('#uploaded-files')).toHaveText(filename);
    });
});
