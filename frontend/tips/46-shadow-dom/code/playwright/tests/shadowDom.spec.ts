import {test, expect} from '@playwright/test';

test.beforeEach(async ({page}) => {
    await page.goto('https://the-internet.herokuapp.com/shadowdom_advanced');
});

test('clicks a button inside nested shadow roots', async ({page}) => {
    // CSS locators look inside open shadow roots, so there is no need to name the shadow hosts
    await page.locator('#inner-button').click();

    await expect(page.locator('#nested-result')).toHaveText('You clicked the button in the inner shadow root');
});

test('XPath does not look inside shadow roots', async ({page}) => {
    await expect(page.locator('xpath=//button[@id="inner-button"]')).toHaveCount(0);
});
