import {browser, $, expect} from '@wdio/globals';

describe('Emulate location', () => {
    it('geolocation', async () => {
        await browser.emulate('geolocation', {latitude: 52.52, longitude: 13.405});

        await browser.url('https://the-internet.herokuapp.com/geolocation');
        // Grants the page's origin access to the location, so the browser doesn't ask
        await browser.setPermissions({name: 'geolocation'}, 'granted');
        await $('button').click();

        await expect($('#lat-value')).toHaveText('52.52');
        await expect($('#long-value')).toHaveText('13.405');
    });

    it('time zone and locale', async () => {
        await browser.emulate('timezone', 'Asia/Tokyo');
        await browser.emulate('locale', 'de-DE');

        await browser.url('https://the-internet.herokuapp.com/locale');

        await expect($('#browser-timezone')).toHaveText('Asia/Tokyo');
        await expect($('#browser-language')).toHaveText('de-DE');
        await expect($('#formatted-date')).toHaveText('Mittwoch, 15. April 2026 um 21:00');
        await expect($('#formatted-number')).toHaveText('1.234.567,891');
        await expect($('#greeting')).toHaveText('Hallo!');
    });
});
