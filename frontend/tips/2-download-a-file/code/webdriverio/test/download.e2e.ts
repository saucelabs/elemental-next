import {browser, $$} from '@wdio/globals';
import assert from 'assert';
import fs from 'fs';
import path from 'path';
import {downloadDir} from '../wdio.conf.js';

describe('Download Test', () => {
    beforeEach(() => {
        fs.mkdirSync(downloadDir, {recursive: true});
    });

    afterEach(() => {
        fs.rmSync(downloadDir, {recursive: true, force: true});
    });

    it('download a file', async () => {
        await browser.url('https://the-internet.herokuapp.com/download');
        await $$('.example a')[0].click();

        // Wait up to 5 seconds for the download to finish (Chrome uses a .crdownload file while downloading)
        await browser.waitUntil(() => fs.readdirSync(downloadDir).some((file) => !file.endsWith('.crdownload')),
            {timeout: 5000});

        const file = fs.readdirSync(downloadDir).find((name) => !name.endsWith('.crdownload'))!;
        assert(fs.statSync(path.join(downloadDir, file)).size > 0);
    });
});
