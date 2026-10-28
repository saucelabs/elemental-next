import {test, expect} from '@playwright/test';

test('file can be downloaded', async ({page}) => {
    await page.goto('https://the-internet.herokuapp.com/download');
    const link = await page.locator('.example a').first().getAttribute('href');

    const response = await page.request.head(new URL(link!, page.url()).toString());

    expect(response.headers()['content-disposition']).toContain('attachment');
    expect(Number(response.headers()['content-length'])).toBeGreaterThan(0);
});
