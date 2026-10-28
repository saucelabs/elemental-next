import {test, expect} from '@playwright/test';

test('has the right title', {tag: '@smoke'}, async ({page}) => {
    await page.goto('https://the-internet.herokuapp.com');
    await expect(page).toHaveTitle('The Internet');
});

// This test is not finished yet, so it fails. Since it's tagged as @wip, it doesn't run with `--grep @smoke`.
test('is a work in progress', {tag: '@wip'}, async ({page}) => {
    await page.goto('https://the-internet.herokuapp.com');
    await expect(page).toHaveTitle('Not finished yet');
});
