import {test, expect} from '@playwright/test';

const BASE_URL = 'https://the-internet.herokuapp.com/dynamic_loading';

for (const example of ['1', '2']) {
    test(`waits for the element to be visible in example ${example}`, async ({page}) => {
        await page.goto(`${BASE_URL}/${example}`);
        await page.locator('#start button').click();

        await page.locator('#finish').waitFor({state: 'visible', timeout: 10000});
        expect(await page.locator('#finish').textContent()).toContain('Hello World!');
    });
}

test('gives up when the wait is too short', async ({page}) => {
    await page.goto(`${BASE_URL}/2`);
    await page.locator('#start button').click();

    await expect(page.locator('#finish').waitFor({state: 'visible', timeout: 2000})).rejects.toThrow();
});

test('waits inside the assertion', async ({page}) => {
    await page.goto(`${BASE_URL}/1`);
    await page.locator('#start button').click();

    await expect(page.locator('#finish')).toHaveText('Hello World!', {timeout: 10000});
});
