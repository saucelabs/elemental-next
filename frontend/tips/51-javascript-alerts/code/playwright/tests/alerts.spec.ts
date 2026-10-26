import {test, expect} from '@playwright/test';

test.beforeEach(async ({page}) => {
    await page.goto('https://the-internet.herokuapp.com/javascript_alerts');
});

test('accepts the confirmation', async ({page}) => {
    page.once('dialog', (dialog) => dialog.accept());
    await page.getByRole('button', {name: 'Click for JS Confirm'}).click();

    await expect(page.locator('#result')).toHaveText('You clicked: Ok');
});

test('dismisses the confirmation', async ({page}) => {
    page.once('dialog', (dialog) => dialog.dismiss());
    await page.getByRole('button', {name: 'Click for JS Confirm'}).click();

    await expect(page.locator('#result')).toHaveText('You clicked: Cancel');
});
