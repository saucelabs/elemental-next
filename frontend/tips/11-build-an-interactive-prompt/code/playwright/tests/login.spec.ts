import {test, expect} from '@playwright/test';

// Each step is code that the Playwright CLI printed in the session of the tip
test('logs in', async ({page}) => {
  await page.goto('https://the-internet.herokuapp.com');
  await page.getByRole('link', {name: 'Form Authentication'}).click();
  await page.locator('#username').fill('tomsmith');
  await page.locator('#password').fill('SuperSecretPassword!');
  await page.locator('button[type=submit]').click();
  await expect(page.locator('#flash')).toContainText('You logged into a secure area!');
});
