import {browser, expect} from '@wdio/globals';
import fs from 'fs';
import os from 'os';
import path from 'path';

describe('Print to PDF', () => {
    it('prints the page to PDF', async () => {
        await browser.url('https://the-internet.herokuapp.com/tables');

        const file = path.join(fs.mkdtempSync(path.join(os.tmpdir(), 'pdf-')), 'tables.pdf');
        // Saves the PDF in the file, and returns it
        const pdf = await browser.savePDF(file, {orientation: 'landscape'});

        // Every PDF file starts with %PDF-
        expect(pdf.subarray(0, 5).toString()).toBe('%PDF-');
        console.log(`Saved ${file}`);
    });
});
