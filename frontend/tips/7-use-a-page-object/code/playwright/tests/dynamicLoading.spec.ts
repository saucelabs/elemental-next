import {test, expect} from '@playwright/test';
import {DynamicLoadingPage} from '../pages/dynamicLoadingPage';

test.describe('Dynamic Loading with a Page Object', () => {
    let dynamicLoading: DynamicLoadingPage;

    test.beforeEach(async ({page}) => {
        dynamicLoading = new DynamicLoadingPage(page);
        await dynamicLoading.visit();
    });

    test('displays Hello World! after loading', async () => {
        await dynamicLoading.start();
        await expect(dynamicLoading.finishText).toHaveText('Hello World!', {timeout: 10000});
    });
});
