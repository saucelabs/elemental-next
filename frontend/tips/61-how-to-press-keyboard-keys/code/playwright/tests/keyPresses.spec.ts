import {test, expect} from '@playwright/test';

test.beforeEach(async ({page}) => {
    await page.goto('https://the-internet.herokuapp.com/key_presses');
});

test('presses a key on an element', async ({page}) => {
    await page.locator('#target').press('Space');
    await expect(page.locator('#result')).toHaveText('You entered: SPACE');
});

test('presses a key without an element', async ({page}) => {
    await page.keyboard.press('Tab');
    await expect(page.locator('#result')).toHaveText('You entered: TAB');
});
