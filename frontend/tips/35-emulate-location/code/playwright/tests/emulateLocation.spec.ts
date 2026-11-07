import {test, expect} from '@playwright/test';

test.use({
    geolocation: {latitude: 52.52, longitude: 13.405},
    permissions: ['geolocation'],
    timezoneId: 'Asia/Tokyo',
    locale: 'de-DE',
});

test('geolocation', async ({page}) => {
    await page.goto('https://the-internet.herokuapp.com/geolocation');
    await page.locator('button').click();

    await expect(page.locator('#lat-value')).toHaveText('52.52');
    await expect(page.locator('#long-value')).toHaveText('13.405');
});

test('time zone and locale', async ({page}) => {
    await page.goto('https://the-internet.herokuapp.com/locale');

    await expect(page.locator('#browser-timezone')).toHaveText('Asia/Tokyo');
    await expect(page.locator('#browser-language')).toHaveText('de-DE');
    await expect(page.locator('#formatted-date')).toHaveText('Mittwoch, 15. April 2026 um 21:00');
    await expect(page.locator('#formatted-number')).toHaveText('1.234.567,891');
    await expect(page.locator('#greeting')).toHaveText('Hallo!');
});
