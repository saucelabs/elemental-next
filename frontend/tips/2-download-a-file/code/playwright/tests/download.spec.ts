import {test, expect} from '@playwright/test';
import fs from 'fs';

test('download a file', async ({page}, testInfo) => {
    await page.goto('https://the-internet.herokuapp.com/download');

    const downloadPromise = page.waitForEvent('download');
    await page.locator('.example a').first().click();
    const download = await downloadPromise;

    const filePath = testInfo.outputPath(download.suggestedFilename());
    await download.saveAs(filePath);

    expect(fs.statSync(filePath).size).toBeGreaterThan(0);
});
