const assert = require('assert');
const {browser} = require('vibium');

async function isDisplayed(page, selector) {
    try {
        return await page.find({css: selector}, {timeout: 2000}).isVisible();
    } catch (error) {
        // page.find throws an error when the element doesn't show up in time
        return false;
    }
}

describe('Exception Handling', function () {
    let bro;
    let page;

    beforeEach(async function () {
        bro = await browser.start();
        page = await bro.page();
        await page.go('https://the-internet.herokuapp.com/login');
        await page.find({css: '#username'}).fill('tomsmith');
        await page.find({css: '#password'}).fill('SuperSecretPassword!');
        await page.find({css: '#login button'}).click();
        await page.find({css: '.flash.success'}).waitUntil('visible');
    });

    afterEach(async function () {
        await bro.stop();
    });

    it('throws an error when acting on a missing element', async function () {
        await assert.rejects(page.find({css: '#login'}, {timeout: 2000}).click(), /timeout/);
    });

    it('does not display the login form', async function () {
        assert.strictEqual(await isDisplayed(page, '#login'), false);
    });
});
