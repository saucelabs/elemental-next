import {test, expect, chromium, type LaunchOptions} from '@playwright/test';

async function loadThePage(options: LaunchOptions) {
    const browser = await chromium.launch(options);
    const page = await browser.newPage();
    await page.goto('https://the-internet.herokuapp.com');
    await expect(page).toHaveTitle('The Internet');
    console.log(`${options.channel ?? 'Playwright Chromium'} ${browser.version()}`);
    await browser.close();
}

// The browser that `npx playwright install chromium` downloaded for this Playwright version
test('runs the Chromium build of Playwright', async () => {
    await loadThePage({});
});

// The Google Chrome installed on this machine
test('runs Google Chrome', async () => {
    await loadThePage({channel: 'chrome'});
});
