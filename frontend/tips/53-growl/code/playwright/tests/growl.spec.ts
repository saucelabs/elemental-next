import {test, expect} from '@playwright/test';

test('displays a notification', async ({page}) => {
    await page.goto('https://the-internet.herokuapp.com');

    // Step 1: add jQuery to the page, if it's not there
    if (!await page.evaluate(() => 'jQuery' in window)) {
        await page.addScriptTag({url: 'https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js'});
    }

    // Step 2: add jquery-growl to the page
    await page.addScriptTag({url: 'https://the-internet.herokuapp.com/js/vendor/jquery.growl.js'});

    // Step 3: add the jquery-growl styles to the page
    await page.addStyleTag({url: 'https://the-internet.herokuapp.com/css/jquery.growl.css'});

    // Step 4: display a message with jquery-growl
    await page.evaluate(() => (window as any).jQuery.growl({title: 'GET', message: '/'}));

    await expect(page.locator('#growls .growl .growl-title')).toHaveText('GET');
    await expect(page.locator('#growls .growl .growl-message')).toHaveText('/');
});
