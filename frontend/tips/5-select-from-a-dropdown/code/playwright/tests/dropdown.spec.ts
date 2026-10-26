import {test, expect} from '@playwright/test';

test('select from a dropdown', async ({page}) => {
    await page.goto('https://the-internet.herokuapp.com/dropdown');

    await page.locator('#dropdown').selectOption({label: 'Option 1'});

    await expect(page.locator('#dropdown option:checked')).toHaveText('Option 1');
});
