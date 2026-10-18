import {browser, $, expect} from '@wdio/globals';

const MESSAGE = 'Congratulations! You must have the proper credentials.';

describe('Basic Auth', () => {
    it('logs in with basic auth', async () => {
        await browser.url('https://the-internet.herokuapp.com/basic_auth', {
            auth: {user: 'admin', pass: 'admin'},
        });

        await expect($('.example p')).toHaveText(MESSAGE);
    });
});
