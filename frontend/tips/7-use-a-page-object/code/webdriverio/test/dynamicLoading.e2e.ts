import {expect} from '@wdio/globals';
import dynamicLoading from '../pages/dynamicLoadingPage.js';

describe('Dynamic Loading with a Page Object', () => {
    beforeEach(async () => {
        await dynamicLoading.visit();
    });

    it('displays Hello World! after loading', async () => {
        await dynamicLoading.start();
        await dynamicLoading.waitForFinish();
        await expect(dynamicLoading.finishText).toHaveText('Hello World!');
    });
});
