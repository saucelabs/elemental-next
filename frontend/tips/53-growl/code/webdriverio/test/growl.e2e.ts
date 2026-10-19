import {browser, $, expect} from '@wdio/globals';

describe('Growl', () => {
    it('displays a notification', async () => {
        await browser.url('https://the-internet.herokuapp.com');

        // Step 1: check for jQuery on the page, add it if need be
        await browser.execute(() => {
            if (!window.jQuery) {
                const jquery = document.createElement('script');
                jquery.src = 'https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js';
                document.head.appendChild(jquery);
            }
        });
        await browser.waitUntil(() => browser.execute(() => Boolean(window.jQuery)), {timeout: 10000});

        // Step 2: use jQuery to add jquery-growl to the page
        await browser.execute(() => {
            window.jQuery.getScript('https://the-internet.herokuapp.com/js/vendor/jquery.growl.js');
        });

        // Step 3: use jQuery to add jquery-growl styles to the page
        await browser.execute(() => {
            window.jQuery('head').append('<link rel="stylesheet" ' +
                'href="https://the-internet.herokuapp.com/css/jquery.growl.css" type="text/css" />');
        });
        await browser.waitUntil(() => browser.execute(() => Boolean(window.jQuery.growl)), {timeout: 10000});

        // Step 4: display a message with jquery-growl
        await browser.execute(() => window.jQuery.growl({title: 'GET', message: '/'}));

        await expect($('#growls .growl .growl-title')).toHaveText('GET');
        await expect($('#growls .growl .growl-message')).toHaveText('/');
    });
});
