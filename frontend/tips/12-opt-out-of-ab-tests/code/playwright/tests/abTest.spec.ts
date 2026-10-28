import {test, expect} from '@playwright/test';

const optOutCookie = {name: 'optimizelyOptOut', value: 'true', url: 'https://the-internet.herokuapp.com'};

test('forges the opt-out cookie on the target page', async ({page, context}) => {
    await page.goto('https://the-internet.herokuapp.com/abtest');
    await expect(page.locator('h3')).toHaveText(/A\/B Test (Variation 1|Control)/);

    await context.addCookies([optOutCookie]);
    await page.reload();

    await expect(page.locator('h3')).toHaveText('No A/B Test');
});

test('forges the opt-out cookie before visiting the target page', async ({page, context}) => {
    await context.addCookies([optOutCookie]);
    await page.goto('https://the-internet.herokuapp.com/abtest');

    await expect(page.locator('h3')).toHaveText('No A/B Test');
});

test('appends the opt-out parameter to the URL', async ({page}) => {
    page.on('dialog', (dialog) => dialog.dismiss());
    await page.goto('https://the-internet.herokuapp.com/abtest?optimizely_opt_out=true');

    await expect(page.locator('h3')).toHaveText('No A/B Test');
});
