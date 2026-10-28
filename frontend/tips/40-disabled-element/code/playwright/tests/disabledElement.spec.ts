import {test, expect} from '@playwright/test';

test('finds the disabled option', async ({page}) => {
    await page.goto('https://the-internet.herokuapp.com/dropdown');

    await expect(page.locator('option', {hasText: 'Please select an option'})).toBeDisabled();
    await expect(page.locator('option', {hasText: 'Option 1'})).toBeEnabled();
});
