import {test, expect} from '@playwright/test';

test.beforeEach(async ({page}) => {
    await page.goto('https://the-internet.herokuapp.com/checkboxes');
});

test('looks up the checked attribute', async ({page}) => {
    const checkboxes = page.locator('input[type="checkbox"]');
    console.log(await checkboxes.evaluateAll((elements) => elements.map((element) => element.getAttribute('checked'))));
    expect(await checkboxes.first().getAttribute('checked')).toBeNull();
    expect(await checkboxes.last().getAttribute('checked')).not.toBeNull();
});

test('checks if the checkbox is checked', async ({page}) => {
    const checkboxes = page.locator('input[type="checkbox"]');
    await expect(checkboxes.first()).not.toBeChecked();
    await expect(checkboxes.last()).toBeChecked();
});
