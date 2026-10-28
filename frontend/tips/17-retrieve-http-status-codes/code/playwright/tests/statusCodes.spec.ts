import {test, expect} from '@playwright/test';

for (const expected of [200, 301, 404, 500]) {
    test(`retrieves the ${expected} status code`, async ({page}) => {
        const response = await page.goto(`https://the-internet.herokuapp.com/status_codes/${expected}`);

        expect(response!.status()).toBe(expected);
    });
}
