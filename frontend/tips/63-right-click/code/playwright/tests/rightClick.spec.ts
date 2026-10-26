import {test, expect} from '@playwright/test';

test('opens the context menu', async ({page}) => {
    await page.goto('https://the-internet.herokuapp.com/context_menu');

    const alertText = new Promise<string>((resolve) => {
        page.once('dialog', async (dialog) => {
            resolve(dialog.message());
            await dialog.accept();
        });
    });
    await page.locator('#hot-spot').click({button: 'right'});

    expect(await alertText).toBe('You selected a context menu');
});
