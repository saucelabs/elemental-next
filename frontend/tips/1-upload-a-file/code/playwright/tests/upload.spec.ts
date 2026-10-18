import {test, expect} from '@playwright/test';
import path from 'path';

test('upload a file', async ({page}) => {
    const filename = 'some-file.txt';
    const filePath = path.join(process.cwd(), filename);

    await page.goto('https://the-internet.herokuapp.com/upload');
    await page.locator('#file-upload').setInputFiles(filePath);
    await page.locator('#file-submit').click();

    await expect(page.locator('#uploaded-files')).toHaveText(filename);
});
