const assert = require('assert');
const {browser} = require('vibium');
const DynamicLoadingPage = require('../pages/dynamicLoadingPage');

describe('Dynamic Loading with a Page Object', function () {
    let bro;
    let dynamicLoading;

    beforeEach(async function () {
        bro = await browser.start();
        dynamicLoading = new DynamicLoadingPage(await bro.page());
        await dynamicLoading.visit();
    });

    afterEach(async function () {
        await bro.stop();
    });

    it('displays Hello World! after loading', async function () {
        await dynamicLoading.start();
        await dynamicLoading.waitForFinish();
        assert.strictEqual(await dynamicLoading.finishText(), 'Hello World!');
    });
});
