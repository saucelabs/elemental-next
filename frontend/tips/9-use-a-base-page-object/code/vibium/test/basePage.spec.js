const assert = require('assert');
const {browser} = require('vibium');
const DynamicLoadingPage = require('../pages/dynamicLoadingPage');
const LoginPage = require('../pages/loginPage');

describe('Base Page Object', function () {
    let bro;
    let page;

    beforeEach(async function () {
        bro = await browser.start();
        page = await bro.page();
    });

    afterEach(async function () {
        await bro.stop();
    });

    it('displays Hello World! after loading', async function () {
        const dynamicLoading = new DynamicLoadingPage(page);
        await dynamicLoading.load();
        await dynamicLoading.start();
        assert.strictEqual(await dynamicLoading.finishText(), 'Hello World!');
    });

    it('logs in with valid credentials', async function () {
        const login = new LoginPage(page);
        await login.load();
        await login.loginAs('tomsmith', 'SuperSecretPassword!');
        assert(await login.successMessagePresent());
    });
});
