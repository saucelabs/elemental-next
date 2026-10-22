const assert = require('assert');
const {browser} = require('vibium');

describe('Growl', function () {
    let bro;
    let page;

    beforeEach(async function () {
        bro = await browser.start();
        page = await bro.page();
    });

    afterEach(async function () {
        await bro.stop();
    });

    it('displays a notification', async function () {
        await page.go('https://the-internet.herokuapp.com');

        // Step 1: check for jQuery on the page, add it if need be
        await page.evaluate(`
            if (!window.jQuery) {
                const jquery = document.createElement('script');
                jquery.src = 'https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js';
                document.head.appendChild(jquery);
            }
        `);
        await page.waitForFunction('Boolean(window.jQuery)', {timeout: 10000});

        // Step 2: use jQuery to add jquery-growl to the page
        await page.evaluate("window.jQuery.getScript('https://the-internet.herokuapp.com/js/vendor/jquery.growl.js')");

        // Step 3: use jQuery to add jquery-growl styles to the page
        await page.evaluate(`window.jQuery('head').append('<link rel="stylesheet" ' +
            'href="https://the-internet.herokuapp.com/css/jquery.growl.css" type="text/css" />')`);
        await page.waitForFunction('Boolean(window.jQuery.growl)', {timeout: 10000});

        // Step 4: display a message with jquery-growl
        await page.evaluate("window.jQuery.growl({title: 'GET', message: '/'})");

        assert.strictEqual(await page.find('#growls .growl .growl-title').text(), 'GET');
        assert.strictEqual(await page.find('#growls .growl .growl-message').text(), '/');
    });
});
