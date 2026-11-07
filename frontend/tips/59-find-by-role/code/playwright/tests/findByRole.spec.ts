import {test, expect} from '@playwright/test';

test('picks a fruit', async ({page}) => {
    await page.goto('https://the-internet.herokuapp.com/custom_dropdown');

    await page.getByRole('combobox', {name: 'Fruit'}).click();
    await page.getByRole('option', {name: 'Mango'}).click();

    await expect(page.getByRole('combobox', {name: 'Fruit'})).toHaveText('Mango');
    await expect(page.locator('#result')).toHaveText('Selected: mango');
});
