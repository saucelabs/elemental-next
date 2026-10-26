import {test, expect} from '@playwright/test';

test('displays the caption on hover', async ({page}) => {
    await page.goto('https://the-internet.herokuapp.com/hovers');
    const anAvatar = page.locator('.figure').first();
    const caption = anAvatar.locator('.figcaption');
    await expect(caption).toBeHidden();

    await anAvatar.hover();
    await expect(caption).toBeVisible();
});
