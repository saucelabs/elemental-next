import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import {browser, $$, expect} from '@wdio/globals';

describe('Download from a remote browser', () => {
    let targetDir: string;

    before(() => {
        targetDir = fs.mkdtempSync(path.join(os.tmpdir(), 'downloads-'));
    });

    after(() => {
        fs.rmSync(targetDir, {recursive: true, force: true});
    });

    it('downloads a file', async () => {
        await browser.url('https://the-internet.herokuapp.com/download');
        const link = $$('.example a')[0];
        const fileName = await link.getText();
        await link.click();

        // The file is downloaded on the remote machine, so we ask for the list of files
        await browser.waitUntil(async () => (await browser.getDownloadableFiles()).names.includes(fileName),
            {timeout: 10000});

        // Copies the file from the remote machine to a folder on this machine
        await browser.downloadFile(fileName, targetDir);
        expect(fs.statSync(path.join(targetDir, fileName)).size).toBeGreaterThan(0);
    });
});
