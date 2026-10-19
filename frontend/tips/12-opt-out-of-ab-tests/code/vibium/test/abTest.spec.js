const assert = require('assert');
const {browser} = require('vibium');

const optOutCookie = {name: 'optimizelyOptOut', value: 'true', domain: 'the-internet.herokuapp.com'};

describe('Opt out of A/B tests', function () {
    let bro;
    let page;

    beforeEach(async function () {
        bro = await browser.start();
        page = await bro.page();
    });

    afterEach(async function () {
        await bro.stop();
    });

    it('forges the opt-out cookie on the target page', async function () {
        await page.go('https://the-internet.herokuapp.com/abtest');
        const headingText = await page.find('h3').text();
        assert(['A/B Test Variation 1', 'A/B Test Control'].includes(headingText));

        await page.context.setCookies([optOutCookie]);
        await page.reload();

        assert.strictEqual(await page.find('h3').text(), 'No A/B Test');
    });

    it('forges the opt-out cookie before visiting the target page', async function () {
        await page.context.setCookies([optOutCookie]);
        await page.go('https://the-internet.herokuapp.com/abtest');

        assert.strictEqual(await page.find('h3').text(), 'No A/B Test');
    });

    it('appends the opt-out parameter to the URL', async function () {
        page.onDialog((dialog) => dialog.dismiss());
        await page.go('https://the-internet.herokuapp.com/abtest?optimizely_opt_out=true');

        assert.strictEqual(await page.find('h3').text(), 'No A/B Test');
    });
});
