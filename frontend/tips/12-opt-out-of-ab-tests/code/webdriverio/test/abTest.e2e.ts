import {browser, $, expect} from '@wdio/globals';

const optOutCookie = {name: 'optimizelyOptOut', value: 'true', domain: 'the-internet.herokuapp.com'};

describe('Opt out of A/B tests', () => {
    afterEach(async () => {
        await browser.deleteCookies();
    });

    it('forges the opt-out cookie on the target page', async () => {
        await browser.url('https://the-internet.herokuapp.com/abtest');
        await expect($('h3')).toHaveText(/A\/B Test (Variation 1|Control)/);

        await browser.setCookies(optOutCookie);
        await browser.refresh();

        await expect($('h3')).toHaveText('No A/B Test');
    });

    it('forges the opt-out cookie before visiting the target page', async () => {
        await browser.setCookies(optOutCookie);
        await browser.url('https://the-internet.herokuapp.com/abtest');

        await expect($('h3')).toHaveText('No A/B Test');
    });

    it('appends the opt-out parameter to the URL', async () => {
        browser.once('dialog', (dialog) => dialog.dismiss());
        await browser.url('https://the-internet.herokuapp.com/abtest?optimizely_opt_out=true');

        await expect($('h3')).toHaveText('No A/B Test');
    });
});
