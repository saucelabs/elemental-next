import fs from 'node:fs';
import path from 'node:path';
import JSZip from 'jszip';
import {browser, $, expect} from '@wdio/globals';

// Sends a file to the remote machine, and returns its path there. The Selenium endpoint takes the file in a
// zip archive, encoded in base64.
async function sendFile(file: string): Promise<string> {
    const zip = new JSZip();
    zip.file(path.basename(file), fs.readFileSync(file));
    return browser.file(await zip.generateAsync({type: 'base64'}));
}

describe('Upload to a remote browser', () => {
    it('uploads a file', async () => {
        const filename = 'some-file.txt';
        const remoteFile = await sendFile(path.join(process.cwd(), filename));

        await browser.url('https://the-internet.herokuapp.com/upload');
        await $('#file-upload').setValue(remoteFile);
        await $('#file-submit').click();
        await expect($('#uploaded-files')).toHaveText(filename);
    });
});
