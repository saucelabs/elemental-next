import {expect} from '@wdio/globals';
import dynamicLoading from '../pages/dynamicLoadingPage.js';
import login from '../pages/loginPage.js';

describe('Base Page Object', () => {
    it('displays Hello World! after loading', async () => {
        await dynamicLoading.load();
        await dynamicLoading.start();
        await expect(dynamicLoading.finishText).toHaveText('Hello World!', {wait: 10000});
    });

    it('logs in with valid credentials', async () => {
        await login.load();
        await login.loginAs('tomsmith', 'SuperSecretPassword!');
        await expect(login.successMessage).toBeDisplayed();
    });
});
