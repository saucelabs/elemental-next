import {test, expect} from '@playwright/test';

for (const [example, description] of [['1', 'a hidden element'], ['2', 'an element rendered after']]) {
    test(`waits for ${description}`, async ({page}) => {
        await page.goto(`https://the-internet.herokuapp.com/dynamic_loading/${example}`);
        await page.locator('#start button').click();

        await expect(page.locator('#finish')).toBeVisible({timeout: 10000});
    });
}
