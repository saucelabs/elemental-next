import fs from 'node:fs';
import {test, expect, chromium, type Browser} from '@playwright/test';

const serverUrl = process.env.PLAYWRIGHT_SERVER_URL || 'ws://127.0.0.1:3000/';

let browser: Browser;

test.beforeAll(async () => {
    const serverIsRunning = await fetch(serverUrl.replace(/^ws/, 'http')).then(() => true, () => false);
    test.skip(!serverIsRunning, `Start a Playwright server on ${serverUrl} (or set PLAYWRIGHT_SERVER_URL) to run this test`);
    // Connects to a Chrome that runs where the Playwright server runs, instead of on this machine
    browser = await chromium.connect(serverUrl);
});

test.afterAll(async () => {
    await browser?.close();
});

test('downloads a file', async ({}, testInfo) => {
    const page = await browser.newPage();
    await page.goto('https://the-internet.herokuapp.com/download');
    const link = page.locator('.example a').first();
    const fileName = await link.textContent();

    // Starts waiting for the download before the click, so we don't miss it
    const downloadPromise = page.waitForEvent('download');
    await link.click();
    const download = await downloadPromise;
    expect(download.suggestedFilename()).toBe(fileName);

    // Copies the file from the remote browser to a folder on this machine
    const downloadedFile = testInfo.outputPath(download.suggestedFilename());
    await download.saveAs(downloadedFile);
    expect(fs.statSync(downloadedFile).size).toBeGreaterThan(0);
});
