import {test, expect} from '@playwright/test';
import {DynamicLoadingPage} from '../pages/dynamicLoadingPage';
import {LoginPage} from '../pages/loginPage';

test('displays Hello World! after loading', async ({page}) => {
    const dynamicLoading = new DynamicLoadingPage(page);
    await dynamicLoading.load();
    await dynamicLoading.start();
    await expect(dynamicLoading.finishText).toHaveText('Hello World!', {timeout: 10000});
});

test('logs in with valid credentials', async ({page}) => {
    const login = new LoginPage(page);
    await login.load();
    await login.loginAs('tomsmith', 'SuperSecretPassword!');
    await expect(login.successMessage).toBeVisible();
});
