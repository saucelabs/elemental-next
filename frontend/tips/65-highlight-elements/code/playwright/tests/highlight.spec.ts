import {test, expect, type Locator} from '@playwright/test';

const HIGHLIGHT_STYLE = 'border: 2px solid red; border-style: dashed;';

async function highlight(element: Locator, duration = 3) {
    // store the original style so it can be reset later
    const originalStyle = (await element.getAttribute('style')) || '';
    // style the element with a red dashed border
    await element.evaluate((el, style) => el.setAttribute('style', style), HIGHLIGHT_STYLE);
    // keep the element highlighted for a spell and then revert
    if (duration > 0) {
        await element.page().waitForTimeout(duration * 1000);
        await element.evaluate((el, style) => el.setAttribute('style', style), originalStyle);
    }
}

test.beforeEach(async ({page}) => {
    await page.goto('https://the-internet.herokuapp.com/large');
});

test('highlights an element', async ({page}) => {
    const element = page.locator('[id="sibling-2.3"]');
    await highlight(element, 0);
    await expect(element).toHaveAttribute('style', /dashed/);
});

test('reverts the style afterward', async ({page}) => {
    const element = page.locator('[id="sibling-2.3"]');
    await highlight(element, 1);
    await expect(element).not.toHaveAttribute('style', /dashed/);
});
