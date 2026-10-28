import {test, expect} from '@playwright/test';

test.beforeEach(async ({page}) => {
    await page.goto('https://the-internet.herokuapp.com/download');
});

test('finds the first link on the page', async ({page}) => {
    const link = await page.locator('a').first().getAttribute('href');
    console.log(link);
    expect(link).toContain('github.com');
});

test('finds the first link in the content', async ({page}) => {
    const link = await page.locator('#content a').first().getAttribute('href');
    console.log(link);
    expect(link).toContain('download/');
});

test('finds the first link in the example', async ({page}) => {
    const link = await page.locator('#content .example a').first().getAttribute('href');
    console.log(link);
    expect(link).toContain('download/');
});
